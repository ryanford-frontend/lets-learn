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
				el.appendChild(svg["path"]("M16.706 16.113c0 4.483-2.554 2.038-5.706 2.038-3.151 0-5.706 2.446-5.706-2.038C5.294 13.187 7.849 10 11 10c3.151 0 5.706 3.187 5.706 6.113zM5.074 8.037c.393 1.335.007 2.625-.862 2.881-.87.256-1.893-.619-2.286-1.955-.393-1.335-.008-2.625.862-2.881.87-.256 1.893.619 2.286 1.955zm15 .944c-.407 1.332-1.442 2.196-2.312 1.93-.87-.266-1.244-1.561-.837-2.893.407-1.332 1.442-2.196 2.312-1.93.869.266 1.244 1.561.837 2.893zM9.964 4.122c.366 1.898-.217 3.606-1.302 3.815-1.084.208-2.26-1.161-2.625-3.059-.367-1.898.216-3.606 1.301-3.815C8.423.854 9.599 2.224 9.964 4.122zm5.996.778c-.387 1.894-1.578 3.25-2.66 3.029-1.082-.221-1.646-1.936-1.259-3.83.387-1.894 1.578-3.25 2.66-3.029 1.082.222 1.645 1.936 1.259 3.83zm14.746 27.213c0 4.483-2.555 2.038-5.706 2.038s-5.706 2.445-5.706-2.038C19.294 29.188 21.849 26 25 26s5.706 3.188 5.706 6.113zm-11.632-8.077c.394 1.336.007 2.626-.862 2.882-.87.256-1.893-.619-2.286-1.954-.393-1.336-.007-2.626.862-2.882.87-.256 1.893.619 2.286 1.954zm15 .945c-.407 1.332-1.442 2.196-2.312 1.93-.869-.266-1.244-1.561-.837-2.892.407-1.332 1.442-2.196 2.312-1.93.869.265 1.244 1.56.837 2.892zm-10.11-4.859c.365 1.897-.218 3.606-1.302 3.814-1.085.209-2.261-1.16-2.626-3.059-.365-1.898.218-3.606 1.302-3.815 1.085-.208 2.261 1.162 2.626 3.06zm5.996.778c-.388 1.893-1.578 3.25-2.66 3.029-1.082-.222-1.647-1.937-1.26-3.83.388-1.894 1.578-3.25 2.66-3.029 1.082.222 1.647 1.937 1.26 3.83z", {["d"]: "M16.706 16.113c0 4.483-2.554 2.038-5.706 2.038-3.151 0-5.706 2.446-5.706-2.038C5.294 13.187 7.849 10 11 10c3.151 0 5.706 3.187 5.706 6.113zM5.074 8.037c.393 1.335.007 2.625-.862 2.881-.87.256-1.893-.619-2.286-1.955-.393-1.335-.008-2.625.862-2.881.87-.256 1.893.619 2.286 1.955zm15 .944c-.407 1.332-1.442 2.196-2.312 1.93-.87-.266-1.244-1.561-.837-2.893.407-1.332 1.442-2.196 2.312-1.93.869.266 1.244 1.561.837 2.893zM9.964 4.122c.366 1.898-.217 3.606-1.302 3.815-1.084.208-2.26-1.161-2.625-3.059-.367-1.898.216-3.606 1.301-3.815C8.423.854 9.599 2.224 9.964 4.122zm5.996.778c-.387 1.894-1.578 3.25-2.66 3.029-1.082-.221-1.646-1.936-1.259-3.83.387-1.894 1.578-3.25 2.66-3.029 1.082.222 1.645 1.936 1.259 3.83zm14.746 27.213c0 4.483-2.555 2.038-5.706 2.038s-5.706 2.445-5.706-2.038C19.294 29.188 21.849 26 25 26s5.706 3.188 5.706 6.113zm-11.632-8.077c.394 1.336.007 2.626-.862 2.882-.87.256-1.893-.619-2.286-1.954-.393-1.336-.007-2.626.862-2.882.87-.256 1.893.619 2.286 1.954zm15 .945c-.407 1.332-1.442 2.196-2.312 1.93-.869-.266-1.244-1.561-.837-2.892.407-1.332 1.442-2.196 2.312-1.93.869.265 1.244 1.56.837 2.892zm-10.11-4.859c.365 1.897-.218 3.606-1.302 3.814-1.085.209-2.261-1.16-2.626-3.059-.365-1.898.218-3.606 1.302-3.815 1.085-.208 2.261 1.162 2.626 3.06zm5.996.778c-.388 1.893-1.578 3.25-2.66 3.029-1.082-.222-1.647-1.937-1.26-3.83.388-1.894 1.578-3.25 2.66-3.029 1.082.222 1.647 1.937 1.26 3.83z",["fill"]: "#662113",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};