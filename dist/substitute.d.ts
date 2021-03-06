/**
 * @preferred
 * @external
 */
import { OmitProxyMethods, ObjectSubstitute } from './types';
/**
 * Type returned by Substitute.for<T>()
 *
 * @remarks
 * Merges type being substituted with types defined within tsSubstitute that provide
 * the configuration and assertions methods.
 *
 * @typeparam T
 * The interface being substituted
 *
 */
export declare type SubstituteOf<T extends Object> = ObjectSubstitute<OmitProxyMethods<T>, T> & T;
/**
 * Static factory for creating substitutes
 *
 */
export declare class Substitute {
    /**
     * Creates a substitute for the specified type
     *
     * @typeparam T The interface being substituted
     *
     * @returns
     * An object with the same shape as the interface and additional methods for
     * configuring the substitute and making assertions about it's usage
     */
    static for<T extends Object>(): SubstituteOf<T>;
}
