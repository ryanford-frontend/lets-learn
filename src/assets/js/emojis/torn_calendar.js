import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M35 32c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V8c0-2.209 1.791-4 4-4h26c2.209 0 4 1.791 4 4v24z", {["fill"]: "#292F33",["d"]: "M35 32c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V8c0-2.209 1.791-4 4-4h26c2.209 0 4 1.791 4 4v24z",}));el.appendChild(svg["path"]("M33 32c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V12c0-1.104.896-2 2-2h26c1.104 0 2 .896 2 2v20z", {["fill"]: "#E1E8ED",["d"]: "M33 32c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V12c0-1.104.896-2 2-2h26c1.104 0 2 .896 2 2v20z",}));el.appendChild(svg["path"]("M33 16H3V8c0-1.104.896-2 2-2h26c1.104 0 2 .896 2 2v8z", {["fill"]: "#DD2E44",["d"]: "M33 16H3V8c0-1.104.896-2 2-2h26c1.104 0 2 .896 2 2v8z",}));el.appendChild(svg["path"]("M11 7c0 .552-.448 1-1 1s-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v6zm16 0c0 .552-.447 1-1 1-.553 0-1-.448-1-1V1c0-.552.447-1 1-1 .553 0 1 .448 1 1v6z", {["d"]: "M11 7c0 .552-.448 1-1 1s-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v6zm16 0c0 .552-.447 1-1 1-.553 0-1-.448-1-1V1c0-.552.447-1 1-1 .553 0 1 .448 1 1v6z",["fill"]: "#99AAB5",}));el.appendChild(svg["path"]("M8.299 9.292c0-.393.311-.704.704-.704h.155c.301 0 .512.155.639.365l1.701 2.77 1.709-2.779c.146-.238.347-.357.631-.357h.155c.393 0 .704.311.704.704v5.082c0 .393-.311.704-.704.704-.384 0-.694-.32-.694-.704v-3.19l-1.234 1.901c-.146.219-.329.356-.585.356-.256 0-.439-.137-.585-.356L9.679 11.21v3.181c0 .384-.311.686-.695.686s-.686-.302-.686-.686V9.292zm7.126 4.826l2.23-5.037c.155-.347.439-.558.823-.558h.082c.384 0 .658.21.814.558l2.23 5.037c.046.1.073.192.073.283 0 .375-.293.676-.667.676-.329 0-.549-.192-.676-.484l-.43-1.006h-2.816l-.448 1.051c-.119.274-.357.439-.649.439-.366 0-.649-.293-.649-.658 0-.1.037-.2.083-.301zm3.957-1.773l-.886-2.112-.887 2.112h1.773zm2.948-3.016c0-.393.311-.704.704-.704h2.221c.813 0 1.444.229 1.864.649.357.357.549.859.549 1.463v.018c0 1.005-.502 1.627-1.28 1.947l.978 1.188c.138.174.229.32.229.539 0 .393-.329.649-.668.649-.32 0-.531-.155-.695-.366l-1.371-1.737h-1.124v1.398c0 .393-.311.704-.704.704-.393 0-.704-.311-.704-.704V9.329zm2.834 2.404c.685 0 1.079-.366 1.079-.905v-.018c0-.603-.421-.914-1.107-.914h-1.398v1.838h1.426z", {["d"]: "M8.299 9.292c0-.393.311-.704.704-.704h.155c.301 0 .512.155.639.365l1.701 2.77 1.709-2.779c.146-.238.347-.357.631-.357h.155c.393 0 .704.311.704.704v5.082c0 .393-.311.704-.704.704-.384 0-.694-.32-.694-.704v-3.19l-1.234 1.901c-.146.219-.329.356-.585.356-.256 0-.439-.137-.585-.356L9.679 11.21v3.181c0 .384-.311.686-.695.686s-.686-.302-.686-.686V9.292zm7.126 4.826l2.23-5.037c.155-.347.439-.558.823-.558h.082c.384 0 .658.21.814.558l2.23 5.037c.046.1.073.192.073.283 0 .375-.293.676-.667.676-.329 0-.549-.192-.676-.484l-.43-1.006h-2.816l-.448 1.051c-.119.274-.357.439-.649.439-.366 0-.649-.293-.649-.658 0-.1.037-.2.083-.301zm3.957-1.773l-.886-2.112-.887 2.112h1.773zm2.948-3.016c0-.393.311-.704.704-.704h2.221c.813 0 1.444.229 1.864.649.357.357.549.859.549 1.463v.018c0 1.005-.502 1.627-1.28 1.947l.978 1.188c.138.174.229.32.229.539 0 .393-.329.649-.668.649-.32 0-.531-.155-.695-.366l-1.371-1.737h-1.124v1.398c0 .393-.311.704-.704.704-.393 0-.704-.311-.704-.704V9.329zm2.834 2.404c.685 0 1.079-.366 1.079-.905v-.018c0-.603-.421-.914-1.107-.914h-1.398v1.838h1.426z",["fill"]: "#FFF",}));el.appendChild(svg["path"]("M23.477 20.376h-.45c-.976 0-1.383-.658-1.383-1.349 0-.712.509-1.349 1.383-1.349h1.813c.874 0 1.362.631 1.362 1.444v11.572c0 1.016-.502 1.586-1.376 1.586-.874 0-1.349-.569-1.349-1.586V20.376zm-13.391 8.823l4.086-3.347c1.786-1.457 2.484-2.258 2.484-3.449 0-1.211-.8-1.868-1.93-1.868-.903 0-1.54.391-2.341 1.252-.206.226-.575.452-1.068.452-.801 0-1.437-.637-1.437-1.437 0-.349.144-.719.37-.986 1.149-1.335 2.505-2.115 4.681-2.115 2.977 0 4.948 1.745 4.948 4.435v.041c0 2.402-1.232 3.593-3.777 5.563l-2.341 1.807h5.01c.76 0 1.376.616 1.376 1.376s-.616 1.355-1.376 1.355h-7.802c-.986 0-1.704-.554-1.704-1.499 0-.616.287-1.149.821-1.58z", {["d"]: "M23.477 20.376h-.45c-.976 0-1.383-.658-1.383-1.349 0-.712.509-1.349 1.383-1.349h1.813c.874 0 1.362.631 1.362 1.444v11.572c0 1.016-.502 1.586-1.376 1.586-.874 0-1.349-.569-1.349-1.586V20.376zm-13.391 8.823l4.086-3.347c1.786-1.457 2.484-2.258 2.484-3.449 0-1.211-.8-1.868-1.93-1.868-.903 0-1.54.391-2.341 1.252-.206.226-.575.452-1.068.452-.801 0-1.437-.637-1.437-1.437 0-.349.144-.719.37-.986 1.149-1.335 2.505-2.115 4.681-2.115 2.977 0 4.948 1.745 4.948 4.435v.041c0 2.402-1.232 3.593-3.777 5.563l-2.341 1.807h5.01c.76 0 1.376.616 1.376 1.376s-.616 1.355-1.376 1.355h-7.802c-.986 0-1.704-.554-1.704-1.499 0-.616.287-1.149.821-1.58z",["fill"]: "#66757F",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};