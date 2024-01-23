export const formatCpf = (value: string) => {
  const cpf = value.replace(/\D/g, "");

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
