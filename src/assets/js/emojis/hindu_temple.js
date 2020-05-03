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
				el.appendChild(svg["path"]("M25 2.875L18 2v5.25l7-.875-2.8-1.75z", {["fill"]: "#FF8044",["d"]: "M25 2.875L18 2v5.25l7-.875-2.8-1.75z",}));el.appendChild(svg["path"]("M0 36h36l-2-2H2z", {["fill"]: "#C7521E",["d"]: "M0 36h36l-2-2H2z",}));el.appendChild(svg["path"]("M17.5 3c0-2 1-2 1 0 0 5 1 9 1 9h-3s1-4 1-9z", {["fill"]: "#662113",["d"]: "M17.5 3c0-2 1-2 1 0 0 5 1 9 1 9h-3s1-4 1-9z",}));el.appendChild(svg["path"]("M28 29v-2l-4-1.938V21l-2-2h-.123s.732-3.967-1.377-5.449V12l-1-1h-3l-1 1v1.551C13.391 15.033 14.123 19 14.123 19H14l-2 2v4.062L8 27v2l-4 2v4l28 .037V31l-4-2z", {["fill"]: "#C7521E",["d"]: "M28 29v-2l-4-1.938V21l-2-2h-.123s.732-3.967-1.377-5.449V12l-1-1h-3l-1 1v1.551C13.391 15.033 14.123 19 14.123 19H14l-2 2v4.062L8 27v2l-4 2v4l28 .037V31l-4-2z",}));el.appendChild(svg["path"]("M19.846 19h-3.692s-.615-5 .615-5h2.462c1.231 0 .615 5 .615 5z", {["fill"]: "#662113",["d"]: "M19.846 19h-3.692s-.615-5 .615-5h2.462c1.231 0 .615 5 .615 5z",}));el.appendChild(svg["path"]("M11.784 23.477v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.293 1.523-.293 1.523h2.045s.172-1.049-.292-1.523zm13.906 0v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.292 1.523-.292 1.523h2.045c-.001 0 .171-1.049-.293-1.523zm4 4v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.292 1.523-.292 1.523h2.045c-.001 0 .171-1.049-.293-1.523zm4 5v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.292 1.523-.292 1.523h2.045c-.001 0 .171-1.049-.293-1.523zm-25.906-5v-.521l-.292-.292h-.063c-.086-.436-.229-1.314-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.064l-.292.292v.521C5.859 27.951 6.031 29 6.031 29h2.045s.172-1.049-.292-1.523zm-4 5v-.521l-.292-.292h-.063c-.086-.436-.229-1.314-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.064l-.292.292v.521C1.859 32.951 2.031 34 2.031 34h2.045s.172-1.049-.292-1.523z", {["fill"]: "#C7521E",["d"]: "M11.784 23.477v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.293 1.523-.293 1.523h2.045s.172-1.049-.292-1.523zm13.906 0v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.292 1.523-.292 1.523h2.045c-.001 0 .171-1.049-.293-1.523zm4 4v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.292 1.523-.292 1.523h2.045c-.001 0 .171-1.049-.293-1.523zm4 5v-.521l-.292-.292h-.063c-.086-.435-.229-1.313-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.063l-.292.292v.521c-.465.474-.292 1.523-.292 1.523h2.045c-.001 0 .171-1.049-.293-1.523zm-25.906-5v-.521l-.292-.292h-.063c-.086-.436-.229-1.314-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.064l-.292.292v.521C5.859 27.951 6.031 29 6.031 29h2.045s.172-1.049-.292-1.523zm-4 5v-.521l-.292-.292h-.063c-.086-.436-.229-1.314-.229-2.337 0-.584-.292-.584-.292 0 0 1.023-.143 1.902-.229 2.337h-.064l-.292.292v.521C1.859 32.951 2.031 34 2.031 34h2.045s.172-1.049-.292-1.523z",}));el.appendChild(svg["path"]("M15.5 12l1-1h3l1 1zM12 21l2-2h8l2 2zm-4 6l2-2h16l2 2zm-4 4l2-2h24l2 2zm-4 5l2-2h32l2 2z", {["fill"]: "#FF8044",["d"]: "M15.5 12l1-1h3l1 1zM12 21l2-2h8l2 2zm-4 6l2-2h16l2 2zm-4 4l2-2h24l2 2zm-4 5l2-2h32l2 2z",}));el.appendChild(svg["path"]("M21 25h-6s0-4 1.5-4h3c1.5 0 1.5 4 1.5 4zm1 4h-8s0-2 2-2h4c2 0 2 2 2 2z", {["fill"]: "#662113",["d"]: "M21 25h-6s0-4 1.5-4h3c1.5 0 1.5 4 1.5 4zm1 4h-8s0-2 2-2h4c2 0 2 2 2 2z",}));el.appendChild(svg["path"]("M24 34H12s0-3 3-3h6c3 0 3 3 3 3z", {["fill"]: "#292F33",["d"]: "M24 34H12s0-3 3-3h6c3 0 3 3 3 3z",}));el.appendChild(svg["path"]("M21 27h-6c-.552 0-1-.448-1-1s.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1zm1 4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm2 5H12c-.552 0-1-.448-1-1s.448-1 1-1h12c.552 0 1 .448 1 1s-.448 1-1 1z", {["fill"]: "#FFA06C",["d"]: "M21 27h-6c-.552 0-1-.448-1-1s.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1zm1 4h-8c-.552 0-1-.448-1-1s.448-1 1-1h8c.552 0 1 .448 1 1s-.448 1-1 1zm2 5H12c-.552 0-1-.448-1-1s.448-1 1-1h12c.552 0 1 .448 1 1s-.448 1-1 1z",}));el.appendChild(svg["path"]("M21 31h1v3h-1zm-7 0h1v3h-1z", {["fill"]: "#FF8044",["d"]: "M21 31h1v3h-1zm-7 0h1v3h-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};