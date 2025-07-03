export function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm'
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
    }
    return num.toString()
}

export function formatUnitText(unit) {
    if (unit.startsWith('Y')) {
        return 'yr'
    } else if (unit.startsWith('M')) {
        return 'mo'
    } else if (unit.startsWith('W')) {
        return 'wk'
    } else if (unit.startsWith('H')) {
        return 'hr'
    }
}
