"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, Eye, EyeOff, LoaderCircle } from "lucide-react";

import { registerUser } from "@/lib/local-auth";

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const currentPassword = String(data.get("password"));

    if (currentPassword !== String(data.get("confirmPassword"))) {
      setError("Пароли не совпадают");
      return;
    }

    setPending(true);
    try {
      await registerUser(String(data.get("name")), String(data.get("email")), currentPassword);
      router.push("/dashboard");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Не удалось создать аккаунт");
      setPending(false);
    }
  }

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div><label className="field-label" htmlFor="name">Имя</label><input className="field-input" id="name" name="name" type="text" autoComplete="name" placeholder="Алексей Иванов" minLength={2} required /></div>
        <div><label className="field-label" htmlFor="email">Электронная почта</label><input className="field-input" id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
        <div>
          <label className="field-label" htmlFor="password">Пароль</label>
          <div className="relative">
            <input className="field-input pr-12" id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Не менее 8 символов" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} required />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700" type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}>{showPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}</button>
          </div>
          <p className={`mt-2 flex items-center gap-1.5 text-xs ${password.length >= 8 ? "text-emerald-600" : "text-slate-400"}`}><Check className="size-3.5" />Минимум 8 символов</p>
        </div>
        <div><label className="field-label" htmlFor="confirmPassword">Повторите пароль</label><input className="field-input" id="confirmPassword" name="confirmPassword" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Ещё раз тот же пароль" minLength={8} required /></div>
        <label className="flex items-start gap-2.5 text-xs leading-5 text-slate-500"><input className="mt-0.5 size-4 shrink-0 rounded border-slate-300 accent-violet-600" type="checkbox" required />Я принимаю <Link className="font-medium text-slate-700 underline" href="/">условия использования</Link> и <Link className="font-medium text-slate-700 underline" href="/">политику конфиденциальности</Link>.</label>
        {error && <p className="rounded-xl bg-rose-50 px-3 py-2.5 text-sm text-rose-700" role="alert">{error}</p>}
        <button className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={pending}>{pending && <LoaderCircle className="size-4 animate-spin" />}{pending ? "Создаём аккаунт…" : "Создать аккаунт"}</button>
      </form>
      <p className="mt-7 text-center text-sm text-slate-500">Уже есть аккаунт? <Link className="font-semibold text-violet-700 hover:text-violet-900" href="/login">Войти</Link></p>
      <p className="mt-5 rounded-xl bg-violet-50 px-3 py-2 text-center text-xs leading-5 text-violet-800">Демо-версия: данные хранятся только в этом браузере.</p>
    </>
  );
}
