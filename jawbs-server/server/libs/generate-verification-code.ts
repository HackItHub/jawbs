function generateVerificationCode(length: number) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let verificationCode = "";
  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    verificationCode += charset[randomIndex];
  }
  return verificationCode;
}

export default generateVerificationCode;
