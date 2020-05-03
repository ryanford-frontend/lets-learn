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
				el.appendChild(svg["path"]("M36 36v-2c0-3.313-2.687-6-6-6H14c-3.313 0-6 2.687-6 6v2h28z", {["fill"]: "#E1E8ED",["d"]: "M36 36v-2c0-3.313-2.687-6-6-6H14c-3.313 0-6 2.687-6 6v2h28z",}));el.appendChild(svg["path"]("M29.799 28.127c0 1.36-3.491 2.434-7.799 2.434-4.307 0-7.799-1.06-7.799-2.42 0-.062.015-.141.029-.141h-.734l-.705.099.006 1.017c.114 2.405 4.186 3.392 9.203 3.392 4.996 0 9.054-1.009 9.2-3.414l.014-.974c0 .002-1.415-.055-1.415.007z", {["fill"]: "#EA596E",["d"]: "M29.799 28.127c0 1.36-3.491 2.434-7.799 2.434-4.307 0-7.799-1.06-7.799-2.42 0-.062.015-.141.029-.141h-.734l-.705.099.006 1.017c.114 2.405 4.186 3.392 9.203 3.392 4.996 0 9.054-1.009 9.2-3.414l.014-.974c0 .002-1.415-.055-1.415.007z",}));el.appendChild(svg["ellipse"](22, 28.07, 18.428, 6.878, {["rx"]: "9.214",["cy"]: "28.07",["ry"]: "3.439",["fill"]: "#BE1931",["cx"]: "22",}));el.appendChild(svg["path"]("M22 30.533c-4.307 0-7.799-1.103-7.799-2.463s3.492-2.463 7.799-2.463 7.799 1.103 7.799 2.463-3.492 2.463-7.799 2.463z", {["fill"]: "#292F33",["d"]: "M22 30.533c-4.307 0-7.799-1.103-7.799-2.463s3.492-2.463 7.799-2.463 7.799 1.103 7.799 2.463-3.492 2.463-7.799 2.463z",}));el.appendChild(svg["path"]("M17.64 27.937c1.744 1.267 2.848 1.511 4.36 1.511 1.511 0 2.616-.245 4.36-1.511v-3.811h-8.72v3.811z", {["fill"]: "#FFDC5D",["d"]: "M17.64 27.937c1.744 1.267 2.848 1.511 4.36 1.511 1.511 0 2.616-.245 4.36-1.511v-3.811h-8.72v3.811z",}));el.appendChild(svg["path"]("M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.147-.372 4.364-1.746v-3.491h-8.728v3.491z", {["fill"]: "#F9CA55",["d"]: "M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.147-.372 4.364-1.746v-3.491h-8.728v3.491z",}));el.appendChild(svg["path"]("M25.597 3.516c-1.925-.623-6.455-.453-7.588 1.019-2.944.057-6.398 2.718-6.851 6.228-.448 3.475.551 5.088.906 7.701.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.85-4.464 10.131-12.047.17-4.585-2.521-8.059-7.361-9.625z", {["fill"]: "#FFAC33",["d"]: "M25.597 3.516c-1.925-.623-6.455-.453-7.588 1.019-2.944.057-6.398 2.718-6.851 6.228-.448 3.475.551 5.088.906 7.701.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.85-4.464 10.131-12.047.17-4.585-2.521-8.059-7.361-9.625z",}));el.appendChild(svg["path"]("M29.413 13.466c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.001-2.898-.305-4.031-1.041-5.05z", {["fill"]: "#FFDC5D",["d"]: "M29.413 13.466c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.001-2.898-.305-4.031-1.041-5.05z",}));el.appendChild(svg["path"]("M22.827 20.9h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z", {["fill"]: "#C1694F",["d"]: "M22.827 20.9h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z",}));el.appendChild(svg["path"]("M18.062 17.564c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953zm7.625 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z", {["fill"]: "#662113",["d"]: "M18.062 17.564c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953zm7.625 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z",}));el.appendChild(svg["path"]("M22 24.88c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848", {["fill"]: "#C1694F",["d"]: "M22 24.88c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848",}));el.appendChild(svg["path"]("M33 33v3h3v-2c0-.341-.035-.674-.09-1H33z", {["fill"]: "#55ACEE",["d"]: "M33 33v3h3v-2c0-.341-.035-.674-.09-1H33z",}));el.appendChild(svg["path"]("M34 34h2v2h-2z", {["fill"]: "#FFCC4D",["d"]: "M34 34h2v2h-2z",}));el.appendChild(svg["path"]("M24.004 36c-1.198-5.146-6.048-9-11.857-9C6.338 27 1.488 30.854.29 36h23.714z", {["fill"]: "#E1E8ED",["d"]: "M24.004 36c-1.198-5.146-6.048-9-11.857-9C6.338 27 1.488 30.854.29 36h23.714z",}));el.appendChild(svg["path"]("M22.669 36c-1.173-4.464-5.432-7.778-10.522-7.778S2.798 31.536 1.625 36h21.044z", {["fill"]: "#292F33",["d"]: "M22.669 36c-1.173-4.464-5.432-7.778-10.522-7.778S2.798 31.536 1.625 36h21.044z",}));el.appendChild(svg["path"]("M21.637 36c-1.148-3.937-4.956-6.833-9.49-6.833S3.805 32.063 2.657 36h18.98z", {["fill"]: "#FFAC33",["d"]: "M21.637 36c-1.148-3.937-4.956-6.833-9.49-6.833S3.805 32.063 2.657 36h18.98z",}));el.appendChild(svg["path"]("M18.195 35.048l.103-.063c.769-.468.928-1.538.301-2.182-.468-.48-.993-.909-1.566-1.267-.56-.35-1.159-.621-1.785-.827-.828-.273-1.711.233-1.866 1.091-.119.661.224 1.346.855 1.578.865.318 1.627.828 2.231 1.474.443.472 1.174.533 1.727.196z", {["fill"]: "#FFDC5D",["d"]: "M18.195 35.048l.103-.063c.769-.468.928-1.538.301-2.182-.468-.48-.993-.909-1.566-1.267-.56-.35-1.159-.621-1.785-.827-.828-.273-1.711.233-1.866 1.091-.119.661.224 1.346.855 1.578.865.318 1.627.828 2.231 1.474.443.472 1.174.533 1.727.196z",}));el.appendChild(svg["path"]("M6.344 14.262l-1.542-.571-.6-2.2c-.079-.29-.343-.491-.643-.491-.301 0-.564.201-.643.492l-.6 2.2-1.542.571c-.262.096-.435.346-.435.625s.173.529.435.625l1.534.568.604 2.415c.074.296.341.504.647.504s.572-.208.647-.505l.604-2.415 1.534-.568c.262-.096.435-.346.435-.625 0-.278-.173-.528-.435-.625z", {["fill"]: "#9266CC",["d"]: "M6.344 14.262l-1.542-.571-.6-2.2c-.079-.29-.343-.491-.643-.491-.301 0-.564.201-.643.492l-.6 2.2-1.542.571c-.262.096-.435.346-.435.625s.173.529.435.625l1.534.568.604 2.415c.074.296.341.504.647.504s.572-.208.647-.505l.604-2.415 1.534-.568c.262-.096.435-.346.435-.625 0-.278-.173-.528-.435-.625z",}));el.appendChild(svg["path"]("M11.28 4.634l-2.61-.966-.966-2.61c-.161-.433-.573-.72-1.035-.72-.462 0-.874.287-1.035.72l-.966 2.61-2.61.966c-.433.161-.72.573-.72 1.035 0 .462.287.875.72 1.035l2.61.966.966 2.61c.16.433.573.72 1.035.72.462 0 .875-.287 1.035-.72l.966-2.61 2.61-.966c.433-.161.72-.573.72-1.035 0-.462-.287-.875-.72-1.035z", {["fill"]: "#5DADEC",["d"]: "M11.28 4.634l-2.61-.966-.966-2.61c-.161-.433-.573-.72-1.035-.72-.462 0-.874.287-1.035.72l-.966 2.61-2.61.966c-.433.161-.72.573-.72 1.035 0 .462.287.875.72 1.035l2.61.966.966 2.61c.16.433.573.72 1.035.72.462 0 .875-.287 1.035-.72l.966-2.61 2.61-.966c.433-.161.72-.573.72-1.035 0-.462-.287-.875-.72-1.035z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};