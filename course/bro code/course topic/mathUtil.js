export let PI = 3.1415;

export function getCircumference(radius){
    return 2 * PI * radius;
}
export function getArea(radius){
    return PI * radius *radius;
}
export function getVolume(radius){
    let r2 = Math.pow(radius,2)
    return (4/3) * PI * r2
}