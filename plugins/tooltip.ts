import type { DirectiveBinding, Plugin } from 'vue';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

interface TooltipOptions {
  content: string;
  position?: TooltipPosition;
}

interface TooltipElement extends HTMLElement {
  _tooltip?: HTMLElement;
}

interface Position {
  top: number;
  left: number;
}

function calculatePosition(
  el: TooltipElement,
  tooltip: HTMLElement,
  position: TooltipPosition
): Position {
  const rect = el.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  let top: number, left: number;

  switch (position) {
    case 'top':
      top = rect.top - tooltipRect.height - 10;
      left = rect.left + (rect.width - tooltipRect.width) / 2;
      break;
    case 'right':
      top = rect.top + (rect.height - tooltipRect.height) / 2;
      left = rect.right + 10;
      break;
    case 'bottom':
      top = rect.bottom + 10;
      left = rect.left + (rect.width - tooltipRect.width) / 2;
      break;
    case 'left':
      top = rect.top + (rect.height - tooltipRect.height) / 2;
      left = rect.left - tooltipRect.width - 10;
      break;
  }

  // Adjust if tooltip is outside viewport
  top = Math.max(0, Math.min(top, window.innerHeight - tooltipRect.height));
  left = Math.max(0, Math.min(left, window.innerWidth - tooltipRect.width));

  return { top, left };
}

const tooltipDirective = {
  mounted(el: TooltipElement, binding: DirectiveBinding<TooltipOptions>) {
    const tooltip = document.createElement('div');
    tooltip.className = 'fancy-tooltip';
    tooltip.textContent = binding.value.content;
    tooltip.setAttribute('data-position', binding.value.position || 'top');
    document.body.appendChild(tooltip);

    const showTooltip = () => {
      const position = binding.value.position || 'top';
      const { top, left } = calculatePosition(el, tooltip, position);
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      tooltip.classList.add('show');
    };

    const hideTooltip = () => {
      tooltip.classList.remove('show');
    };

    el.addEventListener('mouseenter', showTooltip);
    el.addEventListener('mouseleave', hideTooltip);

    el._tooltip = tooltip;
  },
  updated(el: TooltipElement, binding: DirectiveBinding<TooltipOptions>) {
    if (el._tooltip) {
      el._tooltip.textContent = binding.value.content;
      el._tooltip.setAttribute(
        'data-position',
        binding.value.position || 'top'
      );
    }
  },
  unmounted(el: TooltipElement) {
    if (el._tooltip) {
      document.body.removeChild(el._tooltip);
      delete el._tooltip;
    }
  },
};

const tooltipPlugin: Plugin = {
  install(app) {
    app.directive('tooltip', tooltipDirective);
  },
};

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(tooltipPlugin);
});
