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
				el.appendChild(svg["path"]("M22.45 32.289L.592 18.752 6.55.711l18.042 5.958z", {["fill"]: "#55ACEE",["d"]: "M22.45 32.289L.592 18.752 6.55.711l18.042 5.958z",}));el.appendChild(svg["path"]("M20.543 29.5c-.366 0-.719-.201-.895-.551L6.929 3.687c-.249-.493-.05-1.095.443-1.343.494-.249 1.095-.05 1.343.443l12.72 25.264c.248.493.05 1.094-.444 1.343-.143.072-.297.106-.448.106z", {["fill"]: "#269",["d"]: "M20.543 29.5c-.366 0-.719-.201-.895-.551L6.929 3.687c-.249-.493-.05-1.095.443-1.343.494-.249 1.095-.05 1.343.443l12.72 25.264c.248.493.05 1.094-.444 1.343-.143.072-.297.106-.448.106z",}));el.appendChild(svg["path"]("M3.12 18.48c-.366 0-.718-.201-.894-.55-.249-.493-.05-1.095.443-1.343l18.947-9.54c.49-.25 1.094-.05 1.343.443.248.493.05 1.095-.443 1.343l-18.947 9.54c-.145.073-.298.107-.449.107z", {["fill"]: "#269",["d"]: "M3.12 18.48c-.366 0-.718-.201-.894-.55-.249-.493-.05-1.095.443-1.343l18.947-9.54c.49-.25 1.094-.05 1.343.443.248.493.05 1.095-.443 1.343l-18.947 9.54c-.145.073-.298.107-.449.107z",}));el.appendChild(svg["path"]("M27.367 35.339c-2.44 0-4.521-1.268-6.199-3.784-.307-.459-.183-1.08.277-1.387.458-.307 1.079-.183 1.387.277 1.564 2.343 3.359 3.228 5.644 2.781.945-.184 1.793-.98 2.27-2.132.701-1.693.47-3.668-.62-5.282-2.006-2.971-2.777-6.787-2.063-10.21.615-2.956 2.24-5.344 4.698-6.905.466-.295 1.084-.158 1.38.308.297.466.158 1.084-.308 1.38-2.516 1.598-3.462 3.941-3.813 5.625-.604 2.905.055 6.151 1.765 8.683 1.466 2.172 1.769 4.851.811 7.167-.734 1.772-2.131 3.018-3.736 3.329-.513.1-1.009.15-1.493.15z", {["fill"]: "#3B88C3",["d"]: "M27.367 35.339c-2.44 0-4.521-1.268-6.199-3.784-.307-.459-.183-1.08.277-1.387.458-.307 1.079-.183 1.387.277 1.564 2.343 3.359 3.228 5.644 2.781.945-.184 1.793-.98 2.27-2.132.701-1.693.47-3.668-.62-5.282-2.006-2.971-2.777-6.787-2.063-10.21.615-2.956 2.24-5.344 4.698-6.905.466-.295 1.084-.158 1.38.308.297.466.158 1.084-.308 1.38-2.516 1.598-3.462 3.941-3.813 5.625-.604 2.905.055 6.151 1.765 8.683 1.466 2.172 1.769 4.851.811 7.167-.734 1.772-2.131 3.018-3.736 3.329-.513.1-1.009.15-1.493.15z",}));el.appendChild(svg["path"]("M31.532 30.992c-.781-2.485-2.807-4.482-4.157-2.075-1.342 2.392 1.04 3.456 3.717 2.74.781 2.485 2.807 4.482 4.157 2.075 1.342-2.392-1.039-3.456-3.717-2.74zm-1.425-7.039c2.377 1.066 5.215.876 4.311-1.731-.898-2.592-3.275-1.517-4.517.961-2.377-1.066-5.215-.876-4.311 1.731.898 2.592 3.275 1.517 4.517-.961zm-1.261-6.597c1.355 2.225 3.802 3.676 4.534 1.015.727-2.645-1.84-3.105-4.267-1.766-1.355-2.224-3.802-3.676-4.534-1.015-.728 2.645 1.84 3.105 4.267 1.766zm2.897-6.557c-.132 2.602 1.074 5.178 3.177 3.39 2.089-1.777.226-3.602-2.534-3.861.132-2.602-1.074-5.178-3.177-3.39-2.089 1.777-.225 3.602 2.534 3.861z", {["d"]: "M31.532 30.992c-.781-2.485-2.807-4.482-4.157-2.075-1.342 2.392 1.04 3.456 3.717 2.74.781 2.485 2.807 4.482 4.157 2.075 1.342-2.392-1.039-3.456-3.717-2.74zm-1.425-7.039c2.377 1.066 5.215.876 4.311-1.731-.898-2.592-3.275-1.517-4.517.961-2.377-1.066-5.215-.876-4.311 1.731.898 2.592 3.275 1.517 4.517-.961zm-1.261-6.597c1.355 2.225 3.802 3.676 4.534 1.015.727-2.645-1.84-3.105-4.267-1.766-1.355-2.224-3.802-3.676-4.534-1.015-.728 2.645 1.84 3.105 4.267 1.766zm2.897-6.557c-.132 2.602 1.074 5.178 3.177 3.39 2.089-1.777.226-3.602-2.534-3.861.132-2.602-1.074-5.178-3.177-3.39-2.089 1.777-.225 3.602 2.534 3.861z",["fill"]: "#9266CC",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};