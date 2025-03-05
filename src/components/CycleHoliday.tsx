import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = {
    name: string;
    emoji: string;
    next: keyof typeof nextHolidaysAlphabet;
};

const nextHolidaysAlphabet: Record<string, Holiday> = {
    Christmas: {
        name: "Christmas",
        emoji: "🎄",
        next: "Easter"
    },
    Halloween: {
        name: "Halloween",
        emoji: "🎃",
        next: "Thanksgiving"
    },
    Thanksgiving: {
        name: "Thanksgiving",
        emoji: "🦃",
        next: "Valentines"
    },
    Easter: {
        name: "Easter",
        emoji: "🐇",
        next: "Halloween"
    },
    Valentines: {
        name: "Valentine's Day",
        emoji: "❤️",
        next: "Christmas"
    }
};
const nextHolidaysOrder: Record<string, Holiday> = {
    Christmas: {
        name: "Christmas",
        emoji: "🎄",
        next: "Valentines"
    },
    Halloween: {
        name: "Halloween",
        emoji: "🎃",
        next: "Thanksgiving"
    },
    Thanksgiving: {
        name: "Thanksgiving",
        emoji: "🦃",
        next: "Christmas"
    },
    Easter: {
        name: "Easter",
        emoji: "🐇",
        next: "Halloween"
    },
    Valentines: {
        name: "Valentine's Day",
        emoji: "❤️",
        next: "Easter"
    }
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(
        nextHolidaysAlphabet.Christmas
    );

    return (
        <div>
            Cycle Holiday
            <Button
                onClick={() => {
                    setHoliday(nextHolidaysAlphabet[holiday.next]);
                }}
            >
                Advance by Alphabet
            </Button>
            <p>Holiday: {holiday.emoji}</p>
            <Button
                onClick={() => {
                    setHoliday(nextHolidaysOrder[holiday.next]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
