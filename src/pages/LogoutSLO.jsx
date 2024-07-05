import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { BrowserUtils } from "@azure/msal-browser";

export function LogoutSLO() {
    const { instance } = useMsal();

    useEffect(() => {
        instance.logoutRedirect({
            account: instance.getActiveAccount(),
            onRedirectNavigate: () => false
        })
    }, [ instance ]);

    return (
        <div
            style={{
                display: 'none', // Hide the iframe
            }}
        >Logout</div>
    )
}
