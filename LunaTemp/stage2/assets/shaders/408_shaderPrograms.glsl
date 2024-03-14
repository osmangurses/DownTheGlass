["\n#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute mediump vec2 in_TEXCOORD0;\nattribute mediump vec4 in_COLOR0;\nvarying mediump vec2 vs_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_COLOR0 = in_COLOR0;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump float _Glow;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec2 vs_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\n#define SV_Target0 gl_FragData[0]\nmediump vec4 u_xlat16_0;\nlowp vec4 u_xlat10_0;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat16_0 = u_xlat10_0 * vs_COLOR0;\n    SV_Target0 = u_xlat16_0 * vec4(_Glow);\n    return;\n}\n\n"]