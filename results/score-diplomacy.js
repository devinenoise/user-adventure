export default function scoreDiplomacy(diplomacy) {
    if (diplomacy === 0) {
        return 'low';
    }
    else if (diplomacy < 50) {
        return 'medium';
    }
    return 'high';
}