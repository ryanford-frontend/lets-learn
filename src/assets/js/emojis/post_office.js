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
				el.appendChild(svg["path"]("M11 10h14v15H11z", {["fill"]: "#EDBB9F",["d"]: "M11 10h14v15H11z",}));el.appendChild(svg["path"]("M1 18v16c0 1.104.896 2 2 2h30c1.104 0 2-.896 2-2V18H1z", {["fill"]: "#BE1931",["d"]: "M1 18v16c0 1.104.896 2 2 2h30c1.104 0 2-.896 2-2V18H1z",}));el.appendChild(svg["path"]("M1 14h34v3H1z", {["fill"]: "#FFE8B6",["d"]: "M1 14h34v3H1z",}));el.appendChild(svg["path"]("M1 16h34v2H1z", {["fill"]: "#C1694F",["d"]: "M1 16h34v2H1z",}));el.appendChild(svg["path"]("M18 27c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z", {["fill"]: "#CCD6DD",["d"]: "M18 27c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z",}));el.appendChild(svg["path"]("M28 27c-1.656 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3zM8 27c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z", {["fill"]: "#AAB8C2",["d"]: "M28 27c-1.656 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3zM8 27c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z",}));el.appendChild(svg["circle"](18, 4, 8, {["cy"]: "4",["r"]: "4",["fill"]: "#D99E82",["cx"]: "18",}));el.appendChild(svg["path"]("M14 4h8v4h-8z", {["fill"]: "#EDBB9F",["d"]: "M14 4h8v4h-8z",}));el.appendChild(svg["path"]("M33 12H3c-1.104 0-2 .896-2 2h34c0-1.104-.896-2-2-2zM23 8H13c-1.104 0-2 .896-2 2h14c0-1.104-.896-2-2-2z", {["fill"]: "#D99E82",["d"]: "M33 12H3c-1.104 0-2 .896-2 2h34c0-1.104-.896-2-2-2zM23 8H13c-1.104 0-2 .896-2 2h14c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M21.667 21.244c-.204.201-.007.403-.007.403l-.887.888-1.495 1.495-.004-.003-.078.085c-.865.863-2.264.863-3.128 0-.862-.864-.862-2.264 0-3.127.863-.864 2.262-.864 3.128 0 .502.505.707 1.189.622 1.846l.895-.894c-.116-.59-.402-1.153-.859-1.609-1.226-1.226-3.216-1.226-4.442 0-1.227 1.227-1.227 3.214 0 4.442 1.226 1.226 3.216 1.226 4.442 0 .028-.027.052-.06.078-.086l.004.004 2.385-2.386s.184.188.392-.016c.204-.199-.004-.404-.004-.404l-.626-.633c-.001.001-.21-.208-.416-.005zm-7.447 2.335c-.135-.469-.175-.957-.122-1.438l-.085-.085c-.824-.822-.33-1.978-.495-2.141-.164-.164-.329 0-.329 0s-1.77 1.771-1.974 1.977c-.164.164 0 .328 0 .328.164.164 1.372-.275 2.087.441l.918.918z", {["d"]: "M21.667 21.244c-.204.201-.007.403-.007.403l-.887.888-1.495 1.495-.004-.003-.078.085c-.865.863-2.264.863-3.128 0-.862-.864-.862-2.264 0-3.127.863-.864 2.262-.864 3.128 0 .502.505.707 1.189.622 1.846l.895-.894c-.116-.59-.402-1.153-.859-1.609-1.226-1.226-3.216-1.226-4.442 0-1.227 1.227-1.227 3.214 0 4.442 1.226 1.226 3.216 1.226 4.442 0 .028-.027.052-.06.078-.086l.004.004 2.385-2.386s.184.188.392-.016c.204-.199-.004-.404-.004-.404l-.626-.633c-.001.001-.21-.208-.416-.005zm-7.447 2.335c-.135-.469-.175-.957-.122-1.438l-.085-.085c-.824-.822-.33-1.978-.495-2.141-.164-.164-.329 0-.329 0s-1.77 1.771-1.974 1.977c-.164.164 0 .328 0 .328.164.164 1.372-.275 2.087.441l.918.918z",["fill"]: "#FFAC33",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};