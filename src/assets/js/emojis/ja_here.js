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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M14.735 11.082c1.694 0 2.508.924 2.508 2.685v9.572c0 1.76-.814 2.662-2.508 2.662H2.26c-.528 0-.836-.374-.836-.946 0-.594.264-.924.858-.924h11.904c.858 0 1.078-.242 1.078-1.034v-9.131c0-.793-.22-1.012-1.078-1.012H2.634c-.572 0-.836-.33-.836-.902 0-.594.264-.968.858-.968h12.079zm16.83 0c1.694 0 2.509.924 2.509 2.685v9.572c0 1.76-.814 2.662-2.509 2.662H19.09c-.528 0-.836-.374-.836-.946 0-.594.264-.924.858-.924h11.904c.858 0 1.078-.242 1.078-1.034v-9.131c0-.793-.22-1.012-1.078-1.012H19.464c-.572 0-.836-.33-.836-.902 0-.594.264-.968.858-.968h12.079z", {["d"]: "M14.735 11.082c1.694 0 2.508.924 2.508 2.685v9.572c0 1.76-.814 2.662-2.508 2.662H2.26c-.528 0-.836-.374-.836-.946 0-.594.264-.924.858-.924h11.904c.858 0 1.078-.242 1.078-1.034v-9.131c0-.793-.22-1.012-1.078-1.012H2.634c-.572 0-.836-.33-.836-.902 0-.594.264-.968.858-.968h12.079zm16.83 0c1.694 0 2.509.924 2.509 2.685v9.572c0 1.76-.814 2.662-2.509 2.662H19.09c-.528 0-.836-.374-.836-.946 0-.594.264-.924.858-.924h11.904c.858 0 1.078-.242 1.078-1.034v-9.131c0-.793-.22-1.012-1.078-1.012H19.464c-.572 0-.836-.33-.836-.902 0-.594.264-.968.858-.968h12.079z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};