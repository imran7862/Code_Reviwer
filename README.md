## 🎨 High-Level Architecture Diagram

```mermaid
flowchart TD

    %% =========================
    %% NODES
    %% =========================

    A[User CLI Command]
    B[runAgent Function]
    C[Gemini Model gemini-2.5-flash]
    D{Tool Dispatcher}

    E[list_files Tool]
    F[read_file Tool]
    G[write_file Tool]

    H[Scan Project Directory]
    I[Read File Content]
    J[Write Fixed Code]

    K[Tool Response]
    L[Update History Loop]
    M[Final Summary Report Console Output]

    %% =========================
    %% FLOW
    %% =========================

    A --> B
    B --> C
    C -->|Function Call| D

    D --> E
    D --> F
    D --> G

    E --> H
    F --> I
    G --> J

    H --> K
    I --> K
    J --> K

    K --> L
    L --> C

    C -->|Final Response| M

    %% =========================
    %% STYLING
    %% =========================

    classDef userLayer fill:#d1fae5,stroke:#10b981,stroke-width:2px,color:#065f46;
    classDef aiLayer fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a;
    classDef toolLayer fill:#ede9fe,stroke:#8b5cf6,stroke-width:2px,color:#4c1d95;
    classDef fileLayer fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#78350f;
    classDef outputLayer fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#7f1d1d;

    class A userLayer;
    class B,C,L aiLayer;
    class D,E,F,G toolLayer;
    class H,I,J,K fileLayer;
    class M outputLayer;
```
### 🚀 Architecture Type

Autonomous AI Agent with Tool Calling  
Pattern Used: Reason → Act → Observe → Refine

The agent:
- Scans files
- Reads content
- Fixes bugs & security issues
- Writes corrected code
- Generates structured review report
