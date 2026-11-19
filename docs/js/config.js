/*
 * config.js — تنظیمات اتصال سایت به پشتیبان (Google Apps Script)
 * فقط همین فایل را ویرایش کنید. هیچ رمز یا کلید محرمانه‌ای این‌جا نگذارید؛ این فایل عمومی است.
 */
window.JR_CONFIG = {
  /* نشانی وب‌اپ Apps Script (بعد از Deploy ← Web app؛ به /exec ختم می‌شود).
     مثال: 'https://script.google.com/macros/s/AKfycb.../exec' */
  apiUrl: 'https://script.google.com/macros/s/AKfycbx8-2O18CJfXRoXldt7Wq7U5O2u2F458mT6Zicu1WMmz0vy135C7YgF3vIAZuwILQ/exec',

  /* کمترین فاصله‌ی بروزرسانی صفحه‌ی عمومی (میلی‌ثانیه). Apps Script همزمانیِ محدودی دارد؛
     عدد کوچک‌تر یعنی فشار بیشتر در لحظه‌ی شروع ثبت‌نام. */
  minPollMs: 7000,

  /* پراکندگی تصادفی درخواستِ بعد از لحظه‌ی شروع تا هزاران نفر همزمان وضعیت نخواهند */
  openPollJitterMs: 7000,

  /* فاصله‌ی بروزرسانی پنل برگزارکنندگان (میلی‌ثانیه) */
  adminPollMs: 15000,
  adminPollHiddenMs: 90000
};
