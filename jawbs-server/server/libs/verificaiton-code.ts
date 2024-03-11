function generateVerificationCode() {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let verificationCode = "";
  for (let i = 0; i < 132; i += 1) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    verificationCode += charset[randomIndex];
  }
  return verificationCode;
}

export default generateVerificationCode;
