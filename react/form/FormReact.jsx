import React, { useState } from "react";

export default function Forming() {
  const [form, setForm] = useState({ isim: "", sehir: "", bio: "" });
  console.log("FORM", form);
  const handleChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });
  return (
    <div className="">
      <h1>React Dersleri</h1>
      <form>
        <input
          value={form.isim}
          onChange={handleChange}
          placeholder="adiniz"
          name="isim"
        />
        <select value={form.sehir} onChange={handleChange} name="sehir">
          <option value="" disabled>
            Şehir seçiniz
          </option>
          <option value="ankara">Ankara</option>
          <option value="istanbul">İstanbul</option>
          <option value="izmir">İzmir</option>
        </select>
        <textarea
          value={form.bio}
          onChange={handleChange}
          rows="10"
          placeholder="biyografiniz"
          name="bio"
        />
        <button>Gönder</button>
      </form>
     
    </div>
  );
}
