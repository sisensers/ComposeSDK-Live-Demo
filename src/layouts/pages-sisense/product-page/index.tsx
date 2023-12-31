/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDSnackbar from "components/MDSnackbar";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// ProductPage page components
import ProductImages from "layouts/pages-sisense/product-page/components/ProductImages";
import ProductInfo from "layouts/pages-sisense/product-page/components/ProductInfo";

// Data
import dataTableData from "layouts/pages-sisense/product-page/data/dataTableData";

// Sisense
import ExecuteQueryChart from "sisense/Charts/ExecuteQueryChart";

// Sisense Components
import BasicPopOver from "components/SisensePopover/BasicPopover";
import TransitionModal from "components/SisenseModal/TransitionModal";
import FollowCursorTooltips from "components/SisenseTooltip/FollowCursorTooltips";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import HoverTooltip from "components/SisenseTooltip/HoverTooltip";
import TooltipContent from "components/SisenseTooltip/TooltipContent";
import MapChart from "components/Maps/Map";
import HighChartsDrill from "components/Maps/HighChartsDrill";
import BasicPopover from "components/SisensePopover/BasicPopover";
import tooltipcontent from "components/SisenseTooltip/TooltipContent";
import MyComponent from "components/SisenseTooltip/TooltipContent";
import TitlebarImageList from "components/imagelist";

function SisenseProductPage(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <MDBox p={3}>
            <MDBox mb={3}>
              <TitlebarImageList />
            </MDBox>
            <MDBox mt={4} mb={2}>
              <MDBox mb={1} ml={2}>
                <MDTypography variant="h5" fontWeight="medium"></MDTypography>
              </MDBox>
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SisenseProductPage;
