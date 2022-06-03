export const validation = (data, type) => {
  const error = {};

  if (!data.email) {
    error.email = "وارد کردن ایمیل الزامی است";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.email = "ایمیل نامعتبر";
  } else {
    delete error.email;
  }

  if (!data.password) {
    error.password = "وارد کردن رمز الزامی است";
  } else if (data.password.length < 6 && data.password === "") {
    error.password = "رمز نامعتبر";
  } else {
    delete error.password;
  }

  if (type === "signup") {
    // name
    if (!data.name.trim()) {
      error.name = "وارد کردن اسم الزامی است";
    } else if (data.name.length < 2) {
      error.name = "اسم باید بیشتر از دو حرف باشد";
    } else {
      delete error.name;
    }
    // confirmPassword
    if (!data.confirmPassword) {
      error.confirmPassword = "تکرار رمز الزامی است";
    } else if (data.confirmPassword !== data.password) {
      error.confirmPassword = "مقدار وارد شده صحیح نمی باشد";
    } else {
      delete error.confirmPassword;
    }
    // isAccepted
    if (data.isAccepted) {
      delete error.isAccepted;
    } else {
      error.isAccepted = "پذیرفتن قوانین الزامی است";
    }
  }

  return error;
};
