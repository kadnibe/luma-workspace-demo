"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

import { loginUser } from "@/lib/local-auth";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const data = new FormData(event.currentTarget);

    try {
      await loginUser(String(data.get("email")), String(data.get("password")));
      router.push("/dashboard");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Не удалось войти");
      setPending(false);
    }
  }

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="field-label" htmlFor="email">Электронная почта</label>
          <input className="field-input" id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700" htmlFor="password">Пароль</label>
            <button className="text-xs font-semibold text-violet-700 hover:text-violet-900" type="button" onClick={() => setError("Функция восстановления будет доступна после подключения почты.")}>Забыли пароль?</button>
          </div>
          <div className="relative">
            <input className="field-input pr-12" id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Введите пароль" minLength={8} required />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700" type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}>{showPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}</button>
          </div>
        </div>
        {error && <p className="rounded-xl bg-rose-50 px-3 py-2.5 text-sm text-rose-700" role="alert">{error}</p>}
        <button className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={pending}>{pending && <LoaderCircle className="size-4 animate-spin" />}{pending ? "Входим…" : "Войти"}</button>
      </form>
      <p className="mt-7 text-center text-sm text-slate-500">Нет аккаунта? <Link className="font-semibold text-violet-700 hover:text-violet-900" href="/register">Зарегистрироваться</Link></p>
      <p className="mt-5 rounded-xl bg-violet-50 px-3 py-2 text-center text-xs leading-5 text-violet-800">Демо-версия: аккаунт хранится только в этом браузере.</p>
    </>
  );
}
