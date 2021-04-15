type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function calculateSubtotal(cartIncompleteArray: CartLine[]): CartLineWithSubtotal[] {
  return cartIncompleteArray.map((cartIncomplete) => {
    return { ...cartIncomplete, subtotal: cartIncomplete.price * cartIncomplete.quantity };
  });
}
