export const formatWaitingTime = (startedTime: any) => {
  const currentTime: any = new Date();
  const timeDifference = currentTime - startedTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 1) {
    return "Agora mesmo";
  } else if (seconds < 60) {
    return `${seconds}s atrás`;
  } else if (minutes < 60) {
    return `${minutes}m atrás`;
  } else if (hours < 24) {
    return `${hours}h atrás`;
  } else if (days < 30) {
    return `${days}d atrás`;
  } else if (months < 12) {
    return `${months}mm atrás`;
  } else {
    return `${years}a atrás`;
  }
};
