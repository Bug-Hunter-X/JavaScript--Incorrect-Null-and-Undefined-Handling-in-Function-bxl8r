# JavaScript Null and Undefined Handling Bug

This repository demonstrates a common yet subtle bug in JavaScript related to handling null and undefined values. The `foo` function attempts to add two numbers, but it fails to correctly handle cases where either input is null or undefined.

## Bug Description

The bug lies in the conditional statement within the `foo` function. The check `a == null || b == null` is insufficient to correctly handle all cases of null or undefined inputs.  This is because `==` performs loose equality comparison and can lead to unexpected results (such as `0 == null` evaluating to `false`).  A more robust approach is needed.

## Solution

The corrected version uses strict equality (`===`) and explicitly checks for both `null` and `undefined` using the `||` operator to handle both cases appropriately.