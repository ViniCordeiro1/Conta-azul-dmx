import Image from "next/image";

import IconSearch from '@/assets/search.svg'

export function Search() {
    return (
        <div className="flex items-center">
            <button>
            <svg  width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#999" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#999" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>
            </button>
        </div>
    )
}