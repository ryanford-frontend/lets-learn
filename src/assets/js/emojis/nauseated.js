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
				el.appendChild(svg["path"]("M35.99 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18 0-9.94 8.06-18 18-18s18 8.06 18 18", {["fill"]: "#77B255",["d"]: "M35.99 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18 0-9.94 8.06-18 18-18s18 8.06 18 18",}));el.appendChild(svg["path"]("M15.364 26.122l-1.515-2.295c1.154-.762 2.606-1.182 4.089-1.182 1.49 0 2.895.402 4.062 1.162l-1.502 2.305c-1.425-.928-3.721-.924-5.134.01zm12.664-13.086c-.244-.3-6.771-1.502-6.826-1.502-.118 0-.251.089-.275.205-.218 1.027-.052 2.071.466 2.941.521.876 1.337 1.47 2.296 1.673.232.049.471.074.707.074 1.746 0 3.296-1.336 3.686-3.177.014-.075-.006-.156-.054-.214zm-13.272-1.502c-.056 0-6.583 1.202-6.827 1.502-.048.059-.068.14-.052.213.389 1.84 1.939 3.176 3.686 3.176.236 0 .474-.025.707-.074 1.972-.417 3.211-2.486 2.762-4.613-.024-.115-.157-.204-.276-.204z", {["fill"]: "#292F33",["d"]: "M15.364 26.122l-1.515-2.295c1.154-.762 2.606-1.182 4.089-1.182 1.49 0 2.895.402 4.062 1.162l-1.502 2.305c-1.425-.928-3.721-.924-5.134.01zm12.664-13.086c-.244-.3-6.771-1.502-6.826-1.502-.118 0-.251.089-.275.205-.218 1.027-.052 2.071.466 2.941.521.876 1.337 1.47 2.296 1.673.232.049.471.074.707.074 1.746 0 3.296-1.336 3.686-3.177.014-.075-.006-.156-.054-.214zm-13.272-1.502c-.056 0-6.583 1.202-6.827 1.502-.048.059-.068.14-.052.213.389 1.84 1.939 3.176 3.686 3.176.236 0 .474-.025.707-.074 1.972-.417 3.211-2.486 2.762-4.613-.024-.115-.157-.204-.276-.204z",}));el.appendChild(svg["path"]("M11.647 29.647c-.444 0-.857-.28-1.005-.724-.185-.555.115-1.155.669-1.339.095-.033 2.453-.877 2.453-3.231s-2.358-3.198-2.458-3.232c-.55-.191-.846-.791-.659-1.342.187-.552.78-.852 1.334-.665.159.053 3.9 1.344 3.9 5.239s-3.741 5.187-3.9 5.239c-.11.037-.223.055-.334.055zm12.705 0c-.111 0-.223-.018-.334-.055-.159-.053-3.9-1.344-3.9-5.239s3.741-5.187 3.9-5.239c.559-.187 1.154.115 1.339.669.185.553-.113 1.151-.664 1.338-.1.034-2.458.878-2.458 3.232s2.358 3.198 2.458 3.232c.551.191.847.791.66 1.342-.15.442-.561.72-1.001.72z", {["fill"]: "#3E721D",["d"]: "M11.647 29.647c-.444 0-.857-.28-1.005-.724-.185-.555.115-1.155.669-1.339.095-.033 2.453-.877 2.453-3.231s-2.358-3.198-2.458-3.232c-.55-.191-.846-.791-.659-1.342.187-.552.78-.852 1.334-.665.159.053 3.9 1.344 3.9 5.239s-3.741 5.187-3.9 5.239c-.11.037-.223.055-.334.055zm12.705 0c-.111 0-.223-.018-.334-.055-.159-.053-3.9-1.344-3.9-5.239s3.741-5.187 3.9-5.239c.559-.187 1.154.115 1.339.669.185.553-.113 1.151-.664 1.338-.1.034-2.458.878-2.458 3.232s2.358 3.198 2.458 3.232c.551.191.847.791.66 1.342-.15.442-.561.72-1.001.72z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};