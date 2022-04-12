interface ICustomer {
  customerId: number;
  customerCode: string;
  customerName: string;
  customerBirthday: string;
  customerGender?: boolean;
  customerIdCard: number;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: ICustomerType;
}
