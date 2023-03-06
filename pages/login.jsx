import styled from "styled-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers'
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import { loginSchema } from '../modules/user/user.schema'
