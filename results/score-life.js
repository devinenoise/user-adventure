export default function scoreLife(life) {
    if (life <= 0) {
        return 'dead';
    }
    else if (life < 40) {
        return 'weak';
    }
    return 'healthy';
}