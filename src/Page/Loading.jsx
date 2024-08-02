import React from 'react'
import "./Loading.css";
export default function Loading() {
    return (
        <>
            <div className="border rounded  p-4 max-w-sm w-full mx-auto p-5" style={{  width: '24%',marginTop:"10px" }}>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <div className="bg-secondary m-1" style={{ height: '8px', width: '100%' }}></div>
                        <div className="mt-3">
                            <div className="d-grid gap-2">
                                <div className="bg-secondary rounded" style={{ height: '8px', width: '66%' }}></div>
                                <div className="bg-secondary rounded" style={{ height: '8px', width: '33%' }}></div>
                            </div>
                            <div className="bg-secondary rounded mt-3" style={{ height: '8px', width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}
