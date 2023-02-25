import React from "react";
import Loading1 from "components/loading1";
import styles from "./styles.module.scss";

const text = [
  "Осталось совсем чуть чуть...",
  "Докачиваем иконки...",
  "Запрашиваем данные у сервера...",
  "Расставляем кнопки по местам...",
  "Загружаем стили...",
];

const Page1 = () => {
  const [loadingText, setLoadingText] = React.useState(text.length-1);

  React.useEffect(() => {
    let interval = setInterval(
      () =>
        setLoadingText((prev) => {
					console.log(prev)
          if (prev === 1) clearInterval(interval);
          return prev - 1;
        }),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.root}>
      <Loading1 />
      <div className={styles.logo}>
        <img width={190} alt="loading-1" src="/images/1.png" />
        <div className={styles.loadingText}>{text[loadingText]}</div>
      </div>
    </div>
  );
};

export default Page1;
