function Cart({ cartCount, increaseCartCount, decreaseCartCount }) {
	return (
		<div>
			<h1>Din Kundvagn</h1>
			{Object.entries(cartCount).map(([bookId, { title, count }]) => (
				<div key={bookId}>
					<h2>{title}</h2>
					<p>Antal: {count}</p>
					<button onClick={() => increaseCartCount(bookId)}>+</button>
					<button onClick={() => decreaseCartCount(bookId)}>-</button>
				</div>
			))}
		</div>
	);
}
export default Cart;
