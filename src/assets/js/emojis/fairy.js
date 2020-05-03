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
				el.appendChild(svg["path"]("M20.769 20.273c-4.558 6.089-5.676 12.675-2.497 14.71 3.179 2.035 9.451-1.252 14.008-7.341 4.558-6.089 2.752-17.029 2.497-16.631-1.777 2.774-9.45 3.173-14.008 9.262z", {["fill"]: "#ABDFFF",["d"]: "M20.769 20.273c-4.558 6.089-5.676 12.675-2.497 14.71 3.179 2.035 9.451-1.252 14.008-7.341 4.558-6.089 2.752-17.029 2.497-16.631-1.777 2.774-9.45 3.173-14.008 9.262z",}));el.appendChild(svg["path"]("M15.255 20.273c4.558 6.089 5.676 12.675 2.498 14.71-3.179 2.035-9.451-1.252-14.009-7.341S.904 10.673 1.247 11.011C5 14.71 10.698 14.184 15.255 20.273z", {["fill"]: "#ABDFFF",["d"]: "M15.255 20.273c4.558 6.089 5.676 12.675 2.498 14.71-3.179 2.035-9.451-1.252-14.009-7.341S.904 10.673 1.247 11.011C5 14.71 10.698 14.184 15.255 20.273z",}));el.appendChild(svg["path"]("M4.598 17.829c-.484-.808-1.158-1.652-.776-.211.542 2.047 2.184 5.253 4.848 7.268 1.12.847 1.209-.427.179-1.398-2.665-2.512-3.291-4.055-4.251-5.659zm26.804 0c-.96 1.604-1.586 3.147-4.251 5.659-1.03.971-.941 2.245.179 1.398 2.664-2.015 4.306-5.221 4.848-7.268.382-1.441-.292-.597-.776.211z", {["fill"]: "#55ACEE",["d"]: "M4.598 17.829c-.484-.808-1.158-1.652-.776-.211.542 2.047 2.184 5.253 4.848 7.268 1.12.847 1.209-.427.179-1.398-2.665-2.512-3.291-4.055-4.251-5.659zm26.804 0c-.96 1.604-1.586 3.147-4.251 5.659-1.03.971-.941 2.245.179 1.398 2.664-2.015 4.306-5.221 4.848-7.268.382-1.441-.292-.597-.776.211z",}));el.appendChild(svg["path"]("M31 36v-3.5c0-3.314-3.685-5.5-7-5.5H12c-3.313 0-7 2.186-7 5.5V36h26z", {["fill"]: "#FFDC5D",["d"]: "M31 36v-3.5c0-3.314-3.685-5.5-7-5.5H12c-3.313 0-7 2.186-7 5.5V36h26z",}));el.appendChild(svg["path"]("M14 20.059v8c0 2.209 1.791 4 4 4s4-1.791 4-4v-8h-8z", {["fill"]: "#FFDC5D",["d"]: "M14 20.059v8c0 2.209 1.791 4 4 4s4-1.791 4-4v-8h-8z",}));el.appendChild(svg["path"]("M14 24.971c1.115 1.26 2.497 1.6 3.999 1.6 1.503 0 2.886-.341 4.001-1.6V21.77h-8v3.201z", {["fill"]: "#F9CA55",["d"]: "M14 24.971c1.115 1.26 2.497 1.6 3.999 1.6 1.503 0 2.886-.341 4.001-1.6V21.77h-8v3.201z",}));el.appendChild(svg["path"]("M25 27h-3s-.938 6-4 6-4-6-4-6h-3c-3 0-4 1-4 1s2 2 2 5v3h18v-3c0-2.983 2-5 2-5s-1-1-4-1z", {["fill"]: "#FA743E",["d"]: "M25 27h-3s-.938 6-4 6-4-6-4-6h-3c-3 0-4 1-4 1s2 2 2 5v3h18v-3c0-2.983 2-5 2-5s-1-1-4-1z",}));el.appendChild(svg["path"]("M21.532 2.731c-1.893-.613-6.348-.445-7.461 1.002-2.895.056-6.292 2.673-6.737 6.125-.441 3.417.541 5.003.891 7.573.396 2.911 2.032 3.842 3.341 4.232 1.882 2.487 3.883 2.38 7.243 2.38 6.561 0 9.686-4.39 9.962-11.846.167-4.51-2.479-7.926-7.239-9.466z", {["fill"]: "#FFAC33",["d"]: "M21.532 2.731c-1.893-.613-6.348-.445-7.461 1.002-2.895.056-6.292 2.673-6.737 6.125-.441 3.417.541 5.003.891 7.573.396 2.911 2.032 3.842 3.341 4.232 1.882 2.487 3.883 2.38 7.243 2.38 6.561 0 9.686-4.39 9.962-11.846.167-4.51-2.479-7.926-7.239-9.466z",}));el.appendChild(svg["path"]("M25.421 12.515c-.635-.879-1.448-1.587-3.229-1.837.668.306 1.308 1.364 1.392 1.949.084.585.167 1.058-.362.473-2.119-2.342-4.427-1.42-6.714-2.851-1.597-.999-2.084-2.105-2.084-2.105s-.195 1.475-2.617 2.979c-.702.436-1.54 1.406-2.005 2.84-.334 1.03-.23 1.949-.23 3.519 0 4.583 3.777 8.436 8.436 8.436s8.436-3.887 8.436-8.436c-.001-2.851-.299-3.964-1.023-4.967z", {["fill"]: "#FFDC5D",["d"]: "M25.421 12.515c-.635-.879-1.448-1.587-3.229-1.837.668.306 1.308 1.364 1.392 1.949.084.585.167 1.058-.362.473-2.119-2.342-4.427-1.42-6.714-2.851-1.597-.999-2.084-2.105-2.084-2.105s-.195 1.475-2.617 2.979c-.702.436-1.54 1.406-2.005 2.84-.334 1.03-.23 1.949-.23 3.519 0 4.583 3.777 8.436 8.436 8.436s8.436-3.887 8.436-8.436c-.001-2.851-.299-3.964-1.023-4.967z",}));el.appendChild(svg["path"]("M21.749 22.168h-7.498s.937 1.875 3.749 1.875 3.749-1.875 3.749-1.875zm-2.812-2.343h-1.875c-.259 0-.469-.21-.469-.469s.21-.469.469-.469h1.875c.259 0 .469.21.469.469 0 .26-.21.469-.469.469z", {["fill"]: "#C1694F",["d"]: "M21.749 22.168h-7.498s.937 1.875 3.749 1.875 3.749-1.875 3.749-1.875zm-2.812-2.343h-1.875c-.259 0-.469-.21-.469-.469s.21-.469.469-.469h1.875c.259 0 .469.21.469.469 0 .26-.21.469-.469.469z",}));el.appendChild(svg["path"]("M14.251 16.545c-.518 0-.937-.42-.937-.937v-.938c0-.518.42-.937.937-.937.518 0 .937.42.937.937v.937c0 .518-.42.938-.937.938zm7.498 0c-.518 0-.937-.42-.937-.937v-.938c0-.518.42-.937.937-.937.518 0 .937.42.937.937v.937c0 .518-.419.938-.937.938z", {["fill"]: "#662113",["d"]: "M14.251 16.545c-.518 0-.937-.42-.937-.937v-.938c0-.518.42-.937.937-.937.518 0 .937.42.937.937v.937c0 .518-.42.938-.937.938zm7.498 0c-.518 0-.937-.42-.937-.937v-.938c0-.518.42-.937.937-.937.518 0 .937.42.937.937v.937c0 .518-.419.938-.937.938z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};