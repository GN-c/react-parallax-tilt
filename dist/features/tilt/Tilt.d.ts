import { IStyle } from '../../common/IStyle';
import { ClientPosition } from '../../common/types';
import { TiltProps } from './types';
export declare class Tilt<T extends HTMLElement> implements IStyle {
    glareAngle: number;
    glareOpacity: number;
    tiltAngleX: number;
    tiltAngleY: number;
    tiltAngleXPercentage: number;
    tiltAngleYPercentage: number;
    update: (wrapperElClientPosition: ClientPosition, props: TiltProps) => void;
    private updateTilt;
    private updateTiltManualInput;
    private updateTiltReverse;
    private updateTiltLimits;
    updateTiltAnglesPercentage: (props: TiltProps) => void;
    render: (element: T) => void;
}
