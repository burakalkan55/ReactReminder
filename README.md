Backend öğrenmeye başlamamla beraber react.js'de unutmalar başladı bundan dolayı kendime bir basit hatırlatma notu çıkarttım kısaca örnekleriyle beraber .

## 2.2 – Modern React.js

🧠 **NOTLAR:**

## 🚀 1. React Temelleri

### ➔ `useState`

- Bir component'in içinde değişken tanımlayıp yönetiriz.
- Örnek: Sayaç, input kontrolü.

### ➔ `useEffect`

- Component açıldığında veya bir veri değiştiğinde çalışacak kodları buraya yazarız.
- Örnek: API'den veri çekmek.

### ➔ `Props / Lifting State Up`

- Bir component'ten diğerine veri aktarmak için props kullanılır.
- "Lifting State Up": Alt component'teki veriyi yukarı taşıyıp ortak kullanmak.

### ➔ `Event Handling`

- Butona tıklama, inputa yazma gibi olayları yönetiriz.
- `onClick`, `onChange`, `onSubmit` gibi eventler.

### ➔ `Conditional Rendering`

- Bazı şeyleri şartlara göre ekranda gösteririz.
- `ternary operator (? :)` veya `&&` kullanılır.

---

## 🚀 2. State Management

### ➔ Zustand

- Küçük/orta projelerde global state yönetimi sağlar.
- Hafif ve kullanımı kolaydır.
- Persist middleware ile LocalStorage bağlantısı yapılabilir.

### ➔ Redux Toolkit

- Büyük projelerde profesyonel state yönetimi.
- Store, Slice, Actions, Reducers kavramları kullanılır.
- Redux Persist ile veriyi tarayıcıda saklayabiliriz.

---

## 🚀 3. react-hook-form

- Form yönetimini çok kolaylaştırır.
- Tek `useForm` ile tüm inputları kontrol ederiz.
- `register`, `handleSubmit`, `reset` kullanılır.
- Validasyon (zorunlu alan, minimum karakter vs.) eklemek kolaydır.

---

## 🚀 4. Custom Hook

- Kendi hook'larımızı (`useSomething`) yazarız.
- Tekrar eden `useState`, `useEffect` kodlarını temizleriz.
- Kod okunabilirliğini ve modülerliği artırırız.

---

## 🚀 5. DataTable & Pagination

- Çok sayıda veriyi güzelce tablo içinde listeleriz.
- Pagination ile verileri sayfa sayfa gösteririz.
- `slice()` ve `Array.from()` gibi yapılar kullanılır.

---

## 🚀 6. Modal (Açılır Pencere)

- Kullanıcıya önemli bir mesaj veya form göstermek için ekranın üstüne küçük pencere açılır.
- `isOpen` state ile aç/kapa kontrol edilir.

---

## 🚀 7. Snackbar (Kısa Bildirim)

- Kullanıcıya küçük uyarı, hata, başarı mesajları gösterilir.
- `setTimeout` ile otomatik kapatılır.

---

## 🚀 8. Dark Mode (Tema Değişimi)

- Kullanıcı açık/koyu tema arasında geçiş yapabilir.
- Arka plan rengi ve yazı rengi dinamik olarak değişir.
- `transition` ile yumuşak geçiş sağlanır.
