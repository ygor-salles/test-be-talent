export const formatPhoneNumber = (phone: string) => {
  if (phone.length !== 13) {
    return phone;
  }

  const countryCode = phone.slice(0, 2);
  const areaCode = phone.slice(2, 4);
  const firstPart = phone.slice(4, 9);
  const secondPart = phone.slice(9);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
};
