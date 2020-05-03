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
				el.appendChild(svg["path"]("M26 28H10c-3.313 0-6 2.686-6 6v2h28v-2c0-3.314-2.685-6-6-6z", {["fill"]: "#292F33",["d"]: "M26 28H10c-3.313 0-6 2.686-6 6v2h28v-2c0-3.314-2.685-6-6-6z",}));el.appendChild(svg["path"]("M8.083 33.341c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m3 0c.251 0 .401 2.659.401 2.659h-.957c.001 0 .194-2.659.556-2.659m13.846 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659m3 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659", {["fill"]: "#66757F",["d"]: "M8.083 33.341c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m3 0c.251 0 .401 2.659.401 2.659h-.957c.001 0 .194-2.659.556-2.659m13.846 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659m3 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659",}));el.appendChild(svg["path"]("M12.38 28s.24.838.77 1.971c.827 1.766 2.366 4.254 4.85 5.441 2.485-1.187 4.024-3.675 4.85-5.441.53-1.133.77-1.971.77-1.971H12.38z", {["fill"]: "#FA743E",["d"]: "M12.38 28s.24.838.77 1.971c.827 1.766 2.366 4.254 4.85 5.441 2.485-1.187 4.024-3.675 4.85-5.441.53-1.133.77-1.971.77-1.971H12.38z",}));el.appendChild(svg["path"]("M18 32c2.329 0 3.882-1.02 4.85-2.029.53-1.133.77-1.971.77-1.971H12.38s.24.838.77 1.971C14.118 30.98 15.671 32 18 32z", {["fill"]: "#DD551F",["d"]: "M18 32c2.329 0 3.882-1.02 4.85-2.029.53-1.133.77-1.971.77-1.971H12.38s.24.838.77 1.971C14.118 30.98 15.671 32 18 32z",}));el.appendChild(svg["path"]("M13.64 28.106c0 .894 2.36 1.993 4.36 1.993s4.359-1.099 4.359-1.992V24.29h-8.72v3.816z", {["fill"]: "#FFDC5D",["d"]: "M13.64 28.106c0 .894 2.36 1.993 4.36 1.993s4.359-1.099 4.359-1.992V24.29h-8.72v3.816z",}));el.appendChild(svg["path"]("M13.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z", {["fill"]: "#F9CA55",["d"]: "M13.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z",}));el.appendChild(svg["path"]("M21.152 3.3c-1.925-.623-5.876-.46-7.008 1.012-2.944.057-6.083 2.932-6.536 6.443-.448 3.475.235 4.874.591 7.486.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.271-4.458 9.552-12.04.169-4.585-2.522-8.059-7.362-9.625z", {["fill"]: "#FFAC33",["d"]: "M21.152 3.3c-1.925-.623-5.876-.46-7.008 1.012-2.944.057-6.083 2.932-6.536 6.443-.448 3.475.235 4.874.591 7.486.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.271-4.458 9.552-12.04.169-4.585-2.522-8.059-7.362-9.625z",}));el.appendChild(svg["path"]("M25.547 13.244c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.899-.305-4.031-1.041-5.05z", {["fill"]: "#FFDC5D",["d"]: "M25.547 13.244c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.899-.305-4.031-1.041-5.05z",}));el.appendChild(svg["path"]("M18.961 20.677h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z", {["fill"]: "#C1694F",["d"]: "M18.961 20.677h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z",}));el.appendChild(svg["path"]("M14.195 17.341c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.426.953-.953.953zm7.626 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z", {["fill"]: "#662113",["d"]: "M14.195 17.341c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.426.953-.953.953zm7.626 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z",}));el.appendChild(svg["path"]("M18.134 24.657c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.939-.142.142-.987.847-3.741.847", {["fill"]: "#C1694F",["d"]: "M18.134 24.657c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.939-.142.142-.987.847-3.741.847",}));el.appendChild(svg["path"]("M32.104 3.511l-14-3c-.068-.015-.14-.015-.209 0l-14 3c-.224.048-.387.243-.395.472-.007.229.142.434.363.498l4.944 1.413C8.615 6.489 8.5 7.176 8.5 8c0 2.29 3.285 3.5 9.5 3.5s9.5-1.21 9.5-3.5c0-.824-.115-1.511-.307-2.106l4.945-1.413c.221-.063.37-.269.362-.498-.008-.229-.171-.424-.396-.472z", {["fill"]: "#292F33",["d"]: "M32.104 3.511l-14-3c-.068-.015-.14-.015-.209 0l-14 3c-.224.048-.387.243-.395.472-.007.229.142.434.363.498l4.944 1.413C8.615 6.489 8.5 7.176 8.5 8c0 2.29 3.285 3.5 9.5 3.5s9.5-1.21 9.5-3.5c0-.824-.115-1.511-.307-2.106l4.945-1.413c.221-.063.37-.269.362-.498-.008-.229-.171-.424-.396-.472z",}));el.appendChild(svg["path"]("M32.48 3.863c-.076-.265-.35-.417-.618-.344L18 7.48 4.137 3.519c-.262-.073-.542.078-.618.344-.076.265.078.542.344.618l14 4c.045.013.091.019.136.019.045 0 .092-.006.137-.019l14-4c.267-.076.421-.353.344-.618z", {["fill"]: "#66757F",["d"]: "M32.48 3.863c-.076-.265-.35-.417-.618-.344L18 7.48 4.137 3.519c-.262-.073-.542.078-.618.344-.076.265.078.542.344.618l14 4c.045.013.091.019.136.019.045 0 .092-.006.137-.019l14-4c.267-.076.421-.353.344-.618z",}));el.appendChild(svg["path"]("M17.958 3.502l-12 1c-.026.002-.458.057-.458.498v6.095c-.299.186-.5.74-.5 2.405 0 2.485.448 4.5 1 4.5s1-2.015 1-4.5c0-1.665-.201-2.219-.5-2.405V5.46l11.542-.962c.274-.023.479-.264.456-.54-.023-.275-.268-.482-.54-.456z", {["fill"]: "#FFCC4D",["d"]: "M17.958 3.502l-12 1c-.026.002-.458.057-.458.498v6.095c-.299.186-.5.74-.5 2.405 0 2.485.448 4.5 1 4.5s1-2.015 1-4.5c0-1.665-.201-2.219-.5-2.405V5.46l11.542-.962c.274-.023.479-.264.456-.54-.023-.275-.268-.482-.54-.456z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};