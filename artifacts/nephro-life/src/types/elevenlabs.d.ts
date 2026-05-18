import type { HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': HTMLAttributes<HTMLElement> & {
        'agent-id': string;
        'placement'?: 'bottom-left' | 'bottom-right';
        'variant'?: string;
        'signed-url'?: string;
        'default-expanded'?: string;
        'always-expanded'?: string;
        'dismissible'?: string;
        'avatar-image-url'?: string;
        'avatar-orb-color-1'?: string;
        'avatar-orb-color-2'?: string;
        'override-config'?: string;
        'dynamic-variables'?: string;
        'language'?: string;
        'show-avatar-when-collapsed'?: string;
        [key: string]: unknown;
      };
    }
  }
}
