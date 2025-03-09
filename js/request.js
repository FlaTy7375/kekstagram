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

// export const postRequest = async function (url) {
//   try {
//     const response = await fetch(url,
//       {
//         method: 'POST',
//         body,
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
//     }
//   } catch(error) {
//     console.error(error);
//   }
// }
