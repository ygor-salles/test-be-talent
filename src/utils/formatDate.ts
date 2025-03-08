export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat('pt-BR').format(date);
};
