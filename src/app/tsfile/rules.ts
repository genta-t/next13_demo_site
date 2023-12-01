export const emailRule = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "「メールアドレス」の入力形式が正しくありません。",
  },
};

export const phoneNumberRule = {
  minLength: {
    value: 6,
    message: "「電話番号」の入力文字数が少なすぎます",
  },
  maxLength: {
    value: 13,
    message: "「電話番号」の入力文字数が多すぎます",
  },
  pattern: {
    value: /^[0-9-]+$/,
    message: "「電話番号」の入力形式が正しくありません",
  },
};

export const textRule = (name: string) => ({
  maxLength: {
    value: 50,
    message: `「${name}」の入力文字数が多すぎます`,
  },
});

export const contextRule = {
  maxLength: {
    value: 1000,
    message: "「内容」入力文字数が多すぎます",
  },
};