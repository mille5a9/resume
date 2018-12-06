﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace resume
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            grpHeader.Paint += PaintBorderlessGrpHeader;
            grpHeader.MouseDown += GrpHeaderOnMouseDown;
            btnHeaderExit.Paint += PaintBorderlessBtnHeaderExit;
            btnHeaderExit.Click += BtnHeaderExit_Click;
            btnHeaderExit.MouseHover += BtnHeaderExit_MouseHover;
            btnHeaderExit.MouseLeave += BtnHeaderExit_MouseLeave;
        }
    }
}
