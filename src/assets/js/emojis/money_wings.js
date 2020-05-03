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
				el.appendChild(svg["path"]("M11.476 10.236c-3.783 5.25-10.408 7.737-10.408 7.737-1.236 1.047-.192 2.281-.192 2.281l10.438 12.359s.522.617 2.28.189c0 0 6.625-2.482 10.407-7.732 3.899-5.41 10.93-7.118 10.93-7.118 1.235-1.047.192-2.283.192-2.283L24.685 3.312s-.522-.618-2.28-.192c0 0-7.03 1.704-10.929 7.116z", {["fill"]: "#A7D28B",["d"]: "M11.476 10.236c-3.783 5.25-10.408 7.737-10.408 7.737-1.236 1.047-.192 2.281-.192 2.281l10.438 12.359s.522.617 2.28.189c0 0 6.625-2.482 10.407-7.732 3.899-5.41 10.93-7.118 10.93-7.118 1.235-1.047.192-2.283.192-2.283L24.685 3.312s-.522-.618-2.28-.192c0 0-7.03 1.704-10.929 7.116z",}));el.appendChild(svg["path"]("M14.279 7.288c-1.009.831-1.978 1.802-2.803 2.948-.816 1.132-1.768 2.129-2.753 3.007l12.526 14.835c.985-.879 1.938-1.875 2.753-3.008.825-1.144 1.794-2.115 2.803-2.947L14.279 7.288z", {["fill"]: "#9AAAB4",["d"]: "M14.279 7.288c-1.009.831-1.978 1.802-2.803 2.948-.816 1.132-1.768 2.129-2.753 3.007l12.526 14.835c.985-.879 1.938-1.875 2.753-3.008.825-1.144 1.794-2.115 2.803-2.947L14.279 7.288z",}));el.appendChild(svg["path"]("M14.479 22.555c-1.557-1.844-4.853 1.148-5.793.035-.455-.539-.162-1.238.436-1.742 1.005-.85 1.73-.355 2.185-.74.323-.272.306-.605.114-.834-.446-.527-1.586-.252-2.472.26l-.431-.51c-.269-.318-.745-.359-1.063-.09-.318.27-.358.744-.089 1.062l.446.529c-.677.898-.907 2.09-.106 3.037 1.496 1.77 4.833-1.172 5.883.072.364.432.262 1.256-.504 1.902-1.148.971-2.188.516-2.655.91-.228.191-.269.555-.026.844.387.457 1.62.359 2.805-.379.002.002.002.004.002.006l.487.576c.269.318.746.357 1.064.09.319-.27.358-.746.089-1.064l-.487-.576c-.005-.006-.013-.01-.019-.016.799-.978 1.069-2.267.134-3.372z", {["fill"]: "#67757F",["d"]: "M14.479 22.555c-1.557-1.844-4.853 1.148-5.793.035-.455-.539-.162-1.238.436-1.742 1.005-.85 1.73-.355 2.185-.74.323-.272.306-.605.114-.834-.446-.527-1.586-.252-2.472.26l-.431-.51c-.269-.318-.745-.359-1.063-.09-.318.27-.358.744-.089 1.062l.446.529c-.677.898-.907 2.09-.106 3.037 1.496 1.77 4.833-1.172 5.883.072.364.432.262 1.256-.504 1.902-1.148.971-2.188.516-2.655.91-.228.191-.269.555-.026.844.387.457 1.62.359 2.805-.379.002.002.002.004.002.006l.487.576c.269.318.746.357 1.064.09.319-.27.358-.746.089-1.064l-.487-.576c-.005-.006-.013-.01-.019-.016.799-.978 1.069-2.267.134-3.372z",}));el.appendChild(svg["path"]("M32.456 32.588c.009-.008.019-.014.028-.021.068-.068.121-.146.181-.221.042-.052.089-.102.128-.155.035-.05.064-.101.096-.152 1.42-2.187.49-5.895-2.321-8.707-2.812-2.812-6.521-3.742-8.707-2.321-.052.031-.103.06-.153.096-.053.039-.104.086-.154.127-.074.061-.152.113-.221.182-.009.009-.015.019-.022.028-.011.011-.024.018-.036.03l.006.005c-1 1.062-1.012 2.705-.006 3.712 1.008 1.008 2.65.994 3.713-.006l.011.012c-.021.02-.044.033-.064.053-1.059 1.059-1.084 2.748-.059 3.775 1.026 1.025 2.717 1 3.775-.059.02-.02.033-.043.053-.064l.011.012c-1 1.062-1.013 2.705-.005 3.713 1.007 1.006 2.649.994 3.711-.006l.006.006c.01-.014.018-.027.029-.039z", {["fill"]: "#E1E8ED",["d"]: "M32.456 32.588c.009-.008.019-.014.028-.021.068-.068.121-.146.181-.221.042-.052.089-.102.128-.155.035-.05.064-.101.096-.152 1.42-2.187.49-5.895-2.321-8.707-2.812-2.812-6.521-3.742-8.707-2.321-.052.031-.103.06-.153.096-.053.039-.104.086-.154.127-.074.061-.152.113-.221.182-.009.009-.015.019-.022.028-.011.011-.024.018-.036.03l.006.005c-1 1.062-1.012 2.705-.006 3.712 1.008 1.008 2.65.994 3.713-.006l.011.012c-.021.02-.044.033-.064.053-1.059 1.059-1.084 2.748-.059 3.775 1.026 1.025 2.717 1 3.775-.059.02-.02.033-.043.053-.064l.011.012c-1 1.062-1.013 2.705-.005 3.713 1.007 1.006 2.649.994 3.711-.006l.006.006c.01-.014.018-.027.029-.039z",}));el.appendChild(svg["path"]("M21.277 25.231c.906.905 2.321.979 3.37.261.439-.75.565-1.463.565-1.686-2.207 1.646-4.177.009-4.618-.97-.183.846.039 1.75.683 2.395zm7.299 3.84c.298-.419.529-.824.637-1.098-1.405 1.288-4.091.345-4.905-1.698-.358.95-.175 2.044.571 2.79 1.002 1.002 2.634.994 3.697.006zm3.854 3.595l.029-.036c.01-.008.02-.014.028-.022.069-.068.122-.146.181-.22.043-.053.089-.102.128-.156.036-.049.065-.101.097-.152.065-.1.1-.218.155-.324-2.528 1.131-4.415-.788-4.944-1.745-.295.917-.103 1.944.609 2.657 1.006 1.007 2.648.995 3.711-.006l.006.004z", {["fill"]: "#CCD6DD",["d"]: "M21.277 25.231c.906.905 2.321.979 3.37.261.439-.75.565-1.463.565-1.686-2.207 1.646-4.177.009-4.618-.97-.183.846.039 1.75.683 2.395zm7.299 3.84c.298-.419.529-.824.637-1.098-1.405 1.288-4.091.345-4.905-1.698-.358.95-.175 2.044.571 2.79 1.002 1.002 2.634.994 3.697.006zm3.854 3.595l.029-.036c.01-.008.02-.014.028-.022.069-.068.122-.146.181-.22.043-.053.089-.102.128-.156.036-.049.065-.101.097-.152.065-.1.1-.218.155-.324-2.528 1.131-4.415-.788-4.944-1.745-.295.917-.103 1.944.609 2.657 1.006 1.007 2.648.995 3.711-.006l.006.004z",}));el.appendChild(svg["path"]("M13.956 12.498l.028-.022c.069-.068.122-.146.181-.22.042-.052.088-.101.127-.155.036-.05.065-.101.097-.152 1.42-2.187.489-5.896-2.322-8.707C9.255.43 5.547-.501 3.36.919c-.051.032-.103.061-.153.097-.054.039-.103.085-.155.127-.074.06-.152.112-.22.181-.009.009-.015.02-.022.028-.011.01-.025.019-.036.03l.005.005c-1 1.062-1.012 2.705-.005 3.712 1.007 1.007 2.65.995 3.712-.005l.011.011c-.021.019-.044.033-.064.053-1.059 1.059-1.084 2.748-.058 3.775 1.026 1.027 2.716 1.001 3.775-.058.02-.02.033-.043.053-.064l.011.011c-1 1.062-1.013 2.705-.005 3.712 1.007 1.007 2.649.995 3.711-.006l.005.006c.011-.011.02-.024.031-.036z", {["fill"]: "#E1E8ED",["d"]: "M13.956 12.498l.028-.022c.069-.068.122-.146.181-.22.042-.052.088-.101.127-.155.036-.05.065-.101.097-.152 1.42-2.187.489-5.896-2.322-8.707C9.255.43 5.547-.501 3.36.919c-.051.032-.103.061-.153.097-.054.039-.103.085-.155.127-.074.06-.152.112-.22.181-.009.009-.015.02-.022.028-.011.01-.025.019-.036.03l.005.005c-1 1.062-1.012 2.705-.005 3.712 1.007 1.007 2.65.995 3.712-.005l.011.011c-.021.019-.044.033-.064.053-1.059 1.059-1.084 2.748-.058 3.775 1.026 1.027 2.716 1.001 3.775-.058.02-.02.033-.043.053-.064l.011.011c-1 1.062-1.013 2.705-.005 3.712 1.007 1.007 2.649.995 3.711-.006l.005.006c.011-.011.02-.024.031-.036z",}));el.appendChild(svg["path"]("M2.773 5.1c.906.906 2.321.98 3.37.26.439-.75.564-1.462.564-1.685-2.206 1.645-4.177.007-4.617-.972-.183.847.039 1.752.683 2.397zm7.301 3.838c.297-.419.528-.822.635-1.096-1.406 1.288-4.092.344-4.905-1.699-.358.95-.175 2.044.57 2.79 1.004 1.003 2.637.994 3.7.005zm3.851 3.597c.011-.011.02-.024.03-.036l.028-.022c.069-.068.122-.146.181-.22.042-.052.088-.101.127-.155.036-.05.065-.101.097-.152.065-.1.1-.219.155-.325-2.528 1.131-4.415-.787-4.944-1.744-.295.917-.103 1.944.609 2.656 1.007 1.007 2.649.995 3.711-.006l.006.004z", {["fill"]: "#CCD6DD",["d"]: "M2.773 5.1c.906.906 2.321.98 3.37.26.439-.75.564-1.462.564-1.685-2.206 1.645-4.177.007-4.617-.972-.183.847.039 1.752.683 2.397zm7.301 3.838c.297-.419.528-.822.635-1.096-1.406 1.288-4.092.344-4.905-1.699-.358.95-.175 2.044.57 2.79 1.004 1.003 2.637.994 3.7.005zm3.851 3.597c.011-.011.02-.024.03-.036l.028-.022c.069-.068.122-.146.181-.22.042-.052.088-.101.127-.155.036-.05.065-.101.097-.152.065-.1.1-.219.155-.325-2.528 1.131-4.415-.787-4.944-1.744-.295.917-.103 1.944.609 2.656 1.007 1.007 2.649.995 3.711-.006l.006.004z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};