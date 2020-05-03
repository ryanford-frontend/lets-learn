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
				el.appendChild(svg["path"]("M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7-.674-1.246-7.404 1.688-10 3.7 0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3-1 4 2 13 2 13 1 15 .625 16.66.266 19.929-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5 4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5 .343-.63 1.129-3.487.734-7.071z", {["fill"]: "#FFCC4D",["d"]: "M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7-.674-1.246-7.404 1.688-10 3.7 0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3-1 4 2 13 2 13 1 15 .625 16.66.266 19.929-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5 4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5 .343-.63 1.129-3.487.734-7.071z",}));el.appendChild(svg["path"]("M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3-3-2-3-3-.001-1.5 3-1.5z", {["fill"]: "#E75A70",["d"]: "M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3-3-2-3-3-.001-1.5 3-1.5z",}));el.appendChild(svg["path"]("M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8zm32 0c-.447-1.342-5.64 1-6.64 2 0 0 4.64 3 5.64 6 0 0 2-5 1-8z", {["fill"]: "#F18F26",["d"]: "M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8zm32 0c-.447-1.342-5.64 1-6.64 2 0 0 4.64 3 5.64 6 0 0 2-5 1-8z",}));el.appendChild(svg["path"]("M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603-2.066-4-2.066-5zm26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603 2.066-4 2.066-5z", {["fill"]: "#FFCC4D",["d"]: "M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603-2.066-4-2.066-5zm26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603 2.066-4 2.066-5z",}));el.appendChild(svg["path"]("M.701 25c-.148 0-.294-.065-.393-.19-.171-.217-.134-.531.083-.702.162-.127 4.02-3.12 10.648-2.605.275.02.481.261.46.536-.021.275-.257.501-.537.46-6.233-.474-9.915 2.366-9.951 2.395-.093.071-.202.106-.31.106zm8.868-4.663c-.049 0-.1-.007-.149-.022-4.79-1.497-8.737-.347-8.777-.336-.265.081-.543-.07-.623-.335-.079-.265.071-.543.335-.622.173-.052 4.286-1.247 9.362.338.264.083.411.363.328.627-.066.213-.263.35-.476.35zM35.299 25c.148 0 .294-.065.393-.19.171-.217.134-.531-.083-.702-.162-.127-4.02-3.12-10.648-2.605-.275.02-.481.261-.46.536.021.275.257.501.537.46 6.233-.474 9.915 2.366 9.951 2.395.093.071.202.106.31.106zm-8.868-4.663c.049 0 .1-.007.149-.022 4.79-1.497 8.737-.347 8.777-.336.265.081.543-.07.623-.335.079-.265-.071-.543-.335-.622-.173-.052-4.286-1.247-9.362.338-.264.083-.411.363-.328.627.065.213.263.35.476.35z", {["fill"]: "#FEE7B8",["d"]: "M.701 25c-.148 0-.294-.065-.393-.19-.171-.217-.134-.531.083-.702.162-.127 4.02-3.12 10.648-2.605.275.02.481.261.46.536-.021.275-.257.501-.537.46-6.233-.474-9.915 2.366-9.951 2.395-.093.071-.202.106-.31.106zm8.868-4.663c-.049 0-.1-.007-.149-.022-4.79-1.497-8.737-.347-8.777-.336-.265.081-.543-.07-.623-.335-.079-.265.071-.543.335-.622.173-.052 4.286-1.247 9.362.338.264.083.411.363.328.627-.066.213-.263.35-.476.35zM35.299 25c.148 0 .294-.065.393-.19.171-.217.134-.531-.083-.702-.162-.127-4.02-3.12-10.648-2.605-.275.02-.481.261-.46.536.021.275.257.501.537.46 6.233-.474 9.915 2.366 9.951 2.395.093.071.202.106.31.106zm-8.868-4.663c.049 0 .1-.007.149-.022 4.79-1.497 8.737-.347 8.777-.336.265.081.543-.07.623-.335.079-.265-.071-.543-.335-.622-.173-.052-4.286-1.247-9.362.338-.264.083-.411.363-.328.627.065.213.263.35.476.35z",}));el.appendChild(svg["path"]("M28.023 24.191C27.046 24.383 23 26 18 26s-9.046-1.617-10.023-1.809C7 24 6.885 25.264 7.442 27.132 8 29 11 33 18 33s10-4 10.558-5.868c.557-1.868.442-3.132-.535-2.941z", {["fill"]: "#292F33",["d"]: "M28.023 24.191C27.046 24.383 23 26 18 26s-9.046-1.617-10.023-1.809C7 24 6.885 25.264 7.442 27.132 8 29 11 33 18 33s10-4 10.558-5.868c.557-1.868.442-3.132-.535-2.941z",}));el.appendChild(svg["path"]("M8 25s5 2 10 2 10-2 10-2-.5 3-1.5 3-1.5-1-1.5-1-4 2-7 2-7-2-7-2-.5 1-1.5 1S8 25 8 25z", {["fill"]: "#F5F8FA",["d"]: "M8 25s5 2 10 2 10-2 10-2-.5 3-1.5 3-1.5-1-1.5-1-4 2-7 2-7-2-7-2-.5 1-1.5 1S8 25 8 25z",}));el.appendChild(svg["path"]("M16.226 5.117c-.859-2.431-3.525-3.707-5.956-2.85-1.477.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58-2.431.857-3.708 3.525-2.85 5.956.122.345.284.663.472.958 1.951 3.582 7.588 6.1 11.002 6.131 2.637-2.167 5.445-7.664 4.717-11.677-.038-.349-.113-.698-.232-1.042zm3.548 0c.859-2.431 3.525-3.707 5.956-2.85 1.477.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.857 3.707 3.525 2.85 5.956-.123.345-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.664-4.717-11.677.038-.349.113-.698.232-1.042z", {["d"]: "M16.226 5.117c-.859-2.431-3.525-3.707-5.956-2.85-1.477.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58-2.431.857-3.708 3.525-2.85 5.956.122.345.284.663.472.958 1.951 3.582 7.588 6.1 11.002 6.131 2.637-2.167 5.445-7.664 4.717-11.677-.038-.349-.113-.698-.232-1.042zm3.548 0c.859-2.431 3.525-3.707 5.956-2.85 1.477.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.857 3.707 3.525 2.85 5.956-.123.345-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.664-4.717-11.677.038-.349.113-.698.232-1.042z",["fill"]: "#DD2E44",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};