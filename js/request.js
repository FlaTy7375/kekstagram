export const getRequest = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} — ${response.statusText}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error)
  }
};

export const postRequest = async function (url, formData) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error); // Логируем ошибку
    throw error; // Пробрасываем ошибку для дальнейшей обработки
  }
};