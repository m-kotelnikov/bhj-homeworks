const countdown = (targetDate) => {
  const now = new Date();
  const diffInSeconds = Math.floor((targetDate - now) / 1000);

  if (diffInSeconds <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diffInSeconds / (24 * 60 * 60));
  const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  const seconds = diffInSeconds % 60;

  return { days, hours, minutes, seconds };
};
