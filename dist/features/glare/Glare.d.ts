import { IStyle } from '../../common/IStyle';
import { ElementSizePosition, ClientPosition } from '../../common/types';
import { GlareProps } from './types';
export declare class Glare implements IStyle {
    glareWrapperEl: HTMLDivElement;
    glareEl: HTMLDivElement;
    glareAngle: number;
    glareOpacity: number;
    constructor(wrapperElSize: ElementSizePosition);
    private calculateGlareSize;
    setSize: (wrapperElSize: ElementSizePosition) => void;
    update: (wrapperElClientPosition: ClientPosition, props: GlareProps, flipVertically: boolean, flipHorizontally: boolean) => void;
    private updateAngle;
    private updateOpacity;
    render: (props: GlareProps) => void;
}
