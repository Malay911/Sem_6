"use client";
import { useRouter } from "next/navigation";


export default function signup(){

    const router=useRouter();

    return (
        <div className="container" style={{ maxWidth: "450px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Signup</h1>
    
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

<div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "6px", color: "#9ea2b6" }}>
                Username
              </label>
              <input
                type="email"
                placeholder="Enter your username"
                required
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  outline: "none"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "6px", color: "#9ea2b6" }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  outline: "none"
                }}
              />
            </div>
    
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "6px", color: "#9ea2b6" }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  outline: "none"
                }}
              />
            </div>
    
            <button
              type="submit"
              style={{
                padding: "12px",
                background: "#4da6ff",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "0.3s ease"
              }}
            >
              Sign Up
            </button>
          </form>
    
          <p style={{ marginTop: "20px", textAlign: "center", color: "#9ea2b6" }}>
            Already have an account? <span style={{ color: "#4da6ff", cursor: "pointer" }}  onClick={() => router.push("/login")}>Login</span>
          </p>
        </div>
      );
}