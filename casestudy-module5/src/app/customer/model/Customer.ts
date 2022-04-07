interface ICustomer {
  id: number;
  code: string;
  name: string;
  birthday: string;
  gender?: boolean;
  idCard: number;
  phone: string;
  email: string;
  address: string;
  customerType: ICustomerType;
}
